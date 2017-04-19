#ifndef HTML_CLEANER_COMMENTCLOSETOKEN_H
#define HTML_CLEANER_COMMENTCLOSETOKEN_H

#include "Token.h"

class CommentCloseToken : public Token {
public:
    CommentCloseToken(Position pos) : Token("-->", pos) {}

    TokenType getType() override {
        return CommentClose;
    }
};


#endif //HTML_CLEANER_COMMENTCLOSETOKEN_H
