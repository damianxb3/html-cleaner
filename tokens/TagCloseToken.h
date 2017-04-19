#ifndef HTML_CLEANER_TAGCLOSETOKEN_H
#define HTML_CLEANER_TAGCLOSETOKEN_H

#include "Token.h"

class TagCloseToken : public Token{
public:
    TagCloseToken(Position pos) : Token(">", pos) {}

    TokenType getType() override {
        return TagClose;
    }
};


#endif //HTML_CLEANER_TAGCLOSETOKEN_H
