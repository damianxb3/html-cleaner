#ifndef HTML_CLEANER_EQUALSTOKEN_H
#define HTML_CLEANER_EQUALSTOKEN_H

#include "Token.h"

class EqualsToken : public Token {
public:
    EqualsToken(Position pos) : Token("=", pos) {}

    TokenType getType() override {
        return Equals;
    }
};


#endif //HTML_CLEANER_EQUALSTOKEN_H
