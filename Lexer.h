#ifndef HTML_CLEANER_LEXER_H
#define HTML_CLEANER_LEXER_H

#include <iostream>
#include <memory>
#include <fstream>
#include "Token.h"

class Lexer {
private:
    std::ifstream htmlSource;
    Position position;
    char currentChar;

public:
    Lexer(std::string file);
    ~Lexer();
    Token getNextToken();
    Token getText();
    Token getScript();

private:
    char getChar();
    char showChar();
    std::string getChars(unsigned long length);
    std::string showChars(unsigned long length);
    std::string getUntil(char limit);
    void consumeWhiteSpaces();
    Token undefinedToken(const std::string &value = "");
    Token handleBeginningTag();
    Token handleValueTag(char quote);
    Token handleNameToken();
    Token handleNumericValueToken();
    Token handleComment();
};


#endif //HTML_CLEANER_LEXER_H
