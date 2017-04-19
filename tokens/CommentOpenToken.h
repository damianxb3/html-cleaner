#ifndef HTML_CLEANER_COMMENTOPENTOKEN_H
#define HTML_CLEANER_COMMENTOPENTOKEN_H

#include "Token.h"

class CommentOpenToken : public Token {
public:
    CommentOpenToken(Position pos) : Token("<!--", pos) {}

    TokenType getType() override {
        return CommentOpen;
    }
};


#endif //HTML_CLEANER_COMMENTOPENTOKEN_H
