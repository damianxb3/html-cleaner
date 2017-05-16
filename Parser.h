#ifndef HTML_CLEANER_PARSER_H
#define HTML_CLEANER_PARSER_H

#include <stack>
#include "Lexer.h"
#include "Node.h"

class Parser {
private:
    Lexer* lexer;
    Node* root;
    Token currentToken;
    int level;
    std::stack<std::string> tagNamesStack;
public:
    Parser(Lexer *lexer);
    void parse();
    Node* getRootNode();
    void printDOM();

private:
    Node *parseElement();
    Attribute parseAttribute();
    Node *parseElementEnd(std::vector<Attribute> attributes, std::vector<Node*> children);
    Node *parseContent();
    Node *parseDoctype();
    std::pair<std::string, std::vector<Attribute>> parseOpener();
    const std::string &getScript();
    const std::string &getStyle();
    void expect(TokenType expectedTokenType);
    std::string expectCloseScript();

    void printNode(Node *node);
};


#endif //HTML_CLEANER_PARSER_H
