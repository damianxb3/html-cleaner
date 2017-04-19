#ifndef HTML_CLEANER_INLINETAGCLOSETOKEN_H
#define HTML_CLEANER_INLINETAGCLOSETOKEN_H

#include "Token.h"

class InlineTagCloseToken : public Token {
public:
    InlineTagCloseToken(Position pos) : Token("/>", pos) {}

    TokenType getType() override {
        return InlineTagClose;
    }
};


#endif //HTML_CLEANER_INLINETAGCLOSETOKEN_H
