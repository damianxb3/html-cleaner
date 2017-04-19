#include <iostream>
#include <fstream>
#include <sstream>
#include <memory>
#include "Lexer.h"

void testLexer();
std::string loadHtmlFromFile();

const char *TokenTypeNames[] = {
        "Doctype",
        "TagOpen",
        "ClosingTagOpen",
        "TagClose",
        "InlineTagClose",
        "Equals",
        "DoubleQuote",
        "SingleQuote",
        "CommentOpen",
        "CommentClose",
        "EofToken",
        "Text"
};

int main() {
    testLexer();
    return 0;
}

void testLexer() {
    std::string htmlString = loadHtmlFromFile();
    Lexer lexer = Lexer(htmlString);
    std::shared_ptr<Token> currentToken;
    do {
        currentToken = lexer.getNextToken();
        std::cout << currentToken->getValue() << "\t\t-\t\t" << TokenTypeNames[currentToken->getType()] << "\n";
    }
    while (currentToken->getType() != EofToken);
}

std::string loadHtmlFromFile() {
    std::ifstream htmlFile("../sample1.html");
    std::stringstream buffer;
    buffer << htmlFile.rdbuf();
    std::string htmlString = buffer.str();
    return htmlString;
}