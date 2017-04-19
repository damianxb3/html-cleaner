#ifndef HTML_CLEANER_DOUBLEQUOTETOKEN_H
#define HTML_CLEANER_DOUBLEQUOTETOKEN_H

#include "Token.h"

class DoubleQuoteToken : public Token {
public:
    DoubleQuoteToken(Position pos) : Token("\"", pos) {}

    TokenType getType() override {
        return DoubleQuote;
    }
};


#endif //HTML_CLEANER_DOUBLEQUOTETOKEN_H
