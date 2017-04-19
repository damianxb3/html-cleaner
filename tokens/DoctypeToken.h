#ifndef HTML_CLEANER_DOCTYPETOKEN_H
#define HTML_CLEANER_DOCTYPETOKEN_H

#include "Token.h"

class DoctypeToken : public Token {
public:
    DoctypeToken(Position pos) : Token("<!DOCTYPE", pos) {}

    TokenType getType() override {
        return Doctype;
    }
};


#endif //HTML_CLEANER_DOCTYPETOKEN_H
