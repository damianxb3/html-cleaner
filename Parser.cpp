#include <vector>
#include "Parser.h"
#include "util.h"

Parser::Parser(Lexer *lexer) : lexer(lexer), root(nullptr), level(1), currentToken(Token(Undefined, "", Position())) {}

Attribute Parser::parseAttribute() {
    Attribute attribute("", "");

    if (currentToken.getType() == Name) {
        attribute.key = currentToken.getValue();
        currentToken = lexer->getNextToken();
        if (currentToken.getType() == Equals) {
            currentToken = lexer->getNextToken();
            if (currentToken.getType() == Value) {
                attribute.value = currentToken.getValue();
                currentToken = lexer->getNextToken();
            }
            else {
                std::cout << "Error";
            }
        }
    }

    return attribute;
}

Node *Parser::parseElementEnd(std::vector<Attribute> attributes, std::vector<Node *> children) {
    expect(OpenEnd);
    currentToken = lexer->getNextToken();
    expect(Name);
    std::string name = currentToken.getValue();
    if (name == tagNamesStack.top()) {
        currentToken = lexer->getNextToken();
        expect(Close);
        tagNamesStack.pop();
        return new Node(name, DoubleTagNode, std::vector<Node*>(), children, attributes, level);
    }
    std::cout << "Error: " << "No closing tag for " << tagNamesStack.top();
    return nullptr;
}

void Parser::expect(TokenType expectedTokenType) {
    if (currentToken.getType() != expectedTokenType) {
        std::cout << "Error! Expected " << expectedTokenType;
    }
}

Node *Parser::parseContent() {
    Token token = lexer->getText();
    if (token.getType() == Text) {
        return new Node(token.getValue(), TextNode, std::vector<Node*>(), std::vector<Node*>(), std::vector<Attribute>(), level);
    }
    if (token.getType() == Empty) {
        currentToken = lexer->getNextToken();
    } else {
        std::cout << "Error! Invalid token - expected Text or Empty";
    }
    if (currentToken.getType() == Comment) {
        return new Node(currentToken.getValue(), CommentNode, std::vector<Node*>(), std::vector<Node*>(), std::vector<Attribute>(), level);
    } else {
        return parseElement();
    }
}

Node *Parser::parseElement() {
    std::vector<Node*> children;
    auto opener = parseOpener();
    if (opener.first == "") {
        return nullptr;
    }
    if(currentToken.getType() == CloseEmpty) {
        return new Node(opener.first, EmptyTagNode, std::vector<Node*>(), std::vector<Node*>(), opener.second, level);
    }
    tagNamesStack.push(opener.first);
    if (currentToken.getType() == Close) {
        if (isSingleTag(opener.first)) {
            tagNamesStack.pop();
            return new Node(opener.first, SingleTagNode, std::vector<Node*>(), std::vector<Node*>(), opener.second, level);
        }
        if (compareCaseInsensitive(toLowerCase(opener.first), "script")) {
            ++level;
            std::string script = getScript();
            children.push_back(new Node(script, TextNode, std::vector<Node*>(), std::vector<Node*>(), std::vector<Attribute>(), level));
            --level;
            tagNamesStack.pop();
            return new Node(opener.first, DoubleTagNode, std::vector<Node*>(), children, opener.second, level);
        }
        if (compareCaseInsensitive(toLowerCase(opener.first), "style")) {
            ++level;
            children.push_back(new Node(getStyle(), TextNode, std::vector<Node*>(), std::vector<Node*>(), std::vector<Attribute>(), level));
            --level;
        } else {
            while (true) {
                ++level;
                Node* localNode = parseContent();
                --level;
                if (localNode != nullptr) {
                    children.push_back(localNode);
                } else {
                    break;
                }
            }
        }
        return parseElementEnd(opener.second, children);
    }
    std::cout << "Error! Close or CloseEmpty was expected";
}

std::pair<std::string, std::vector<Attribute>> Parser::parseOpener() {
    std::string name = "";
    std::vector<Attribute> attributes;
    auto opener = std::pair<std::string, std::vector<Attribute>>(name, attributes);
    if (currentToken.getType() != Open) {
        return opener;
    }
    currentToken = lexer->getNextToken();
    expect(Name);
    name = currentToken.getValue();
    currentToken = lexer->getNextToken();

    while (true) {
        Attribute attribute = parseAttribute();
        if (attribute.key == "") {
            break;
        }
        attributes.push_back(attribute);
    }
    opener.first = name;
    opener.second = attributes;
}

Node *Parser::parseDoctype() {
    expect(OpenDoctype);
    std::string name = currentToken.getValue();
    currentToken = lexer->getNextToken();
    expect(Close);
    return new Node(name, SingleTagNode, std::vector<Node*>(), std::vector<Node*>(), std::vector<Attribute>(), level);
}

const std::string &Parser::getScript() {
    expectCloseScript();
    return currentToken.getValue();
}

const std::string &Parser::getStyle() {
    currentToken = lexer->getText();
    auto temp = currentToken.getValue();
    lexer->getNextToken();
    return temp;
}

std::string Parser::expectCloseScript() {
    currentToken = lexer->getScript();
    return currentToken.getValue();
}

void Parser::parse() {
    std::vector<Node*> parents;
    currentToken = lexer->getNextToken();
    Node* docOpener = parseDoctype();
    parents.push_back(docOpener);
    currentToken = lexer->getNextToken();
    while (currentToken.getType() == Comment){
        parents.push_back(new Node(currentToken.getValue(), CommentNode, std::vector<Node*>(), std::vector<Node*>(), std::vector<Attribute>(), level));
        currentToken = lexer->getNextToken();
    }
    root = parseElement();
    root->setParents(parents);


}

Node *Parser::getRootNode() {
    return root;
}

void Parser::printDOM() {
    std::vector<Node*> children = root->getChildren();
    std::vector<Node*> parents = root->getParents();
    std::vector<Attribute> attributes = root->getAttributes();

    for (auto parent : parents) {
        std::cout << " " << parent->getName() << std::endl;
    }
    for (int i = 1; i < root->getLevel(); ++i){
        std::cout << "---";
    }
    std::cout << " ";
    std::cout << " " << root->getName() << " ";
    for (auto attribute : attributes) {
        std::cout << attribute.key << " = " << attribute.value;
    }
    std::cout << std::endl;
    for (auto child : children) {
        std::cout << child->getName() << " ";
        for (auto attribute : child->getAttributes()) {
            std::cout << attribute.key << " = " << attribute.value;
        }
        std::cout << std::endl;
        if (child->getChildren().size() != 0) {
            printNode(child);
        }
    }
}

void Parser::printNode(Node *node) {
    std::vector<Node*> children = node->getChildren();
    std::vector<Attribute> attributes = node->getAttributes();

    for (auto child : children) {
        for (int i = 1; i < child->getLevel(); i++){
            std::cout << "---";
        }
        std::cout << " ";
        std::cout << child->getName() << " ";
        for (auto attribute : child->getAttributes()) {
            std::cout << attribute.key << " = " << attribute.value;
        }
        std::cout << std::endl;
        if (child->getChildren().size() != 0) {
            printNode(child);
        }
    }
}
