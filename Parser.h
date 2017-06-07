#ifndef HTML_CLEANER_PARSER_H
#define HTML_CLEANER_PARSER_H

#include <stack>
#include "Lexer.h"
#include "Node.h"
#include "HtmlDocument.h"
#include "TagOpener.h"

class Parser {
private:
    Lexer* lexer;
    Token currentToken;
    int level;
    std::stack<std::string> tagNamesStack;
public:
    Parser(Lexer *lexer);
    HtmlDocument parse();

private:
    Node *parseDoctype();
    std::vector<Node*> parseRootComments();
    Node *parseElement();
    TagOpener *parseTagOpener();
    Attribute *parseAttribute();
    Node *parseElementEnd(std::vector<Attribute> attributes, std::vector<Node*> children);
    Node *parseContent();
    std::string getScript();
    void expect(TokenType expectedTokenType);
};


#endif //HTML_CLEANER_PARSER_H
