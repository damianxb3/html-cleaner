#ifndef HTML_CLEANER_SINGLEQUOTETOKEN_H
#define HTML_CLEANER_SINGLEQUOTETOKEN_H

#include "Token.h"

class SingleQuoteToken : public Token {
public:
    SingleQuoteToken(Position pos) : Token("\'", pos) {}

    TokenType getType() override {
        return SingleQuote;
    }
};


#endif //HTML_CLEANER_SINGLEQUOTETOKEN_H
