#include <vector>
#include "Parser.h"
#include "util.h"

Parser::Parser(Lexer *lexer) : lexer(lexer), level(1) {}

HtmlDocument Parser::parse() {
    auto doctype = parseDoctype();
    auto rootComments = parseRootComments();
    auto rootNode = parseElement();
    return HtmlDocument(doctype, rootComments, rootNode);
}

Node* Parser::parseDoctype() {
    currentToken = lexer->getNextToken();
    expect(OpenDoctype);
    std::string name = currentToken.getValue();
    currentToken = lexer->getNextToken();
    expect(Close);
    return new Node(name, SingleTagNode, {}, {}, level);
}

std::vector<Node*> Parser::parseRootComments() {
    std::vector<Node*> rootComments;
    currentToken = lexer->getNextToken();
    while (currentToken.getType() == Comment) {
        auto commentNode = new Node(currentToken.getValue(), CommentNode, {}, {}, 1);
        rootComments.push_back(commentNode);
        currentToken = lexer->getNextToken();
    }
    return rootComments;
}

Node* Parser::parseElement() {
    std::vector<Node*> children;
    auto tagOpener = parseTagOpener();

    if (tagOpener.name == "") {
        return nullptr;
    }

    if(currentToken.getType() == CloseEmpty) {
        return new Node(tagOpener.name, InlineTagNode, {}, tagOpener.attributes, level);
    }

    if (currentToken.getType() != Close) {
        std::cout << "Error! Close or CloseEmpty was expected but found "
                  << getTokenTypeName(currentToken.getType()) << std::endl;
        return nullptr;
    }

    if (isSingleTag(tagOpener.name)) {
        return new Node(tagOpener.name, SingleTagNode, {}, tagOpener.attributes, level);
    }

    if (compareCaseInsensitive(toLowerCase(tagOpener.name), "script")) {
        std::string script = getScript();
        children.push_back(new Node(script, TextNode, {}, {}, level + 1));
        return new Node(tagOpener.name, DoubleTagNode, children, tagOpener.attributes, level);
    }

    tagNamesStack.push(tagOpener.name);

    while (true) {
        level++;
        Node* node = parseContent();
        level--;
        if (node != nullptr) {
            children.push_back(node);
        } else {
            break;
        }
    }
    // parseElement() -->
    // return new Node
    return parseElementEnd(tagOpener.attributes, children);
}

TagOpener Parser::parseTagOpener() {
    // zwracac null zamiast obiektu z no-name
    TagOpener tagOpener("", {});

    if (currentToken.getType() != Open) {
        return tagOpener;
    }

    currentToken = lexer->getNextToken();
    expect(Name);
    tagOpener.name = currentToken.getValue();
    currentToken = lexer->getNextToken();

    while (true) { //<-- parseAttribute != nullptr in while
        Attribute attribute = parseAttribute();
        if (attribute.key == "") {
            break;
        }
        tagOpener.attributes.push_back(attribute);
    }
    return tagOpener;
}

Attribute Parser::parseAttribute() {
    Attribute attribute("", "");

    if (currentToken.getType() != Name) {
        return attribute;
    }

    attribute.key = currentToken.getValue();
    currentToken = lexer->getNextToken();
    if (currentToken.getType() != Equals) {
        return attribute;
    }

    currentToken = lexer->getNextToken();
    expect(Value);
    if (currentToken.getType() == Value) {
        attribute.value = currentToken.getValue();
        currentToken = lexer->getNextToken();
    }

    return attribute;
}

Node *Parser::parseContent() {
    Token token = lexer->getText();
    if (token.getType() == Text) {
        return new Node(token.getValue(), TextNode, {}, {}, level);
    }

    if (token.getType() == Empty) {
        currentToken = lexer->getNextToken();
    } else {
        std::cout << "Error! Expected Text or Empty but found "
                  << getTokenTypeName(token.getType()) << std::endl;
    }

    if (currentToken.getType() == Comment) {
        return new Node(currentToken.getValue(), CommentNode, {}, {}, level);
    } else {
        return parseElement();
    }
}

Node *Parser::parseElementEnd(std::vector<Attribute> attributes, std::vector<Node *> children) {
    expect(OpenEnd);
    currentToken = lexer->getNextToken();
    expect(Name);
    std::string name = currentToken.getValue();
    if (name != tagNamesStack.top()) {
        std::cout << "Error: No closing tag for " << tagNamesStack.top()
                  << ", found " << name << " instead." << std::endl;
        return nullptr;
    }
    currentToken = lexer->getNextToken();
    expect(Close);
    tagNamesStack.pop();
    return new Node(name, DoubleTagNode, children, attributes, level);
}

std::string Parser::getScript() {
    currentToken = lexer->getScript();
    return currentToken.getValue();
}

void Parser::expect(TokenType expectedTokenType) {
    if (currentToken.getType() != expectedTokenType) {
        std::cout << "Error! Expected: " << getTokenTypeName(expectedTokenType)
                  << " but found: " << getTokenTypeName(currentToken.getType()) << std::endl;
    }
}
