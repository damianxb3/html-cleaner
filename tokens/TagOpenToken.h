#ifndef HTML_CLEANER_TAGOPENTOKEN_H
#define HTML_CLEANER_TAGOPENTOKEN_H

#include "Token.h"

class TagOpenToken : public Token {
public:
    TagOpenToken(Position pos) : Token("<", pos) {}

    TokenType getType() override {
        return TagOpen;
    }
};


#endif //HTML_CLEANER_TAGOPENTOKEN_H
