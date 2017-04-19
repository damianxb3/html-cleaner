#ifndef HTML_CLEANER_CLOSINGTAGOPENTOKEN_H
#define HTML_CLEANER_CLOSINGTAGOPENTOKEN_H

#include "Token.h"

class ClosingTagOpenToken : public Token {
public:
    ClosingTagOpenToken(Position pos) : Token("</", pos) {}

    TokenType getType() override {
        return ClosingTagOpen;
    }
};


#endif //HTML_CLEANER_CLOSINGTAGOPENTOKEN_H
