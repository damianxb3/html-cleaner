#ifndef HTML_CLEANER_TEXTTOKEN_H
#define HTML_CLEANER_TEXTTOKEN_H

#include "Token.h"

class TextToken : public Token {
public:
    TextToken(std::string text, Position pos) : Token(text, pos) {}

    TokenType getType() override {
        return Text;
    }
};


#endif //HTML_CLEANER_TEXTTOKEN_H
