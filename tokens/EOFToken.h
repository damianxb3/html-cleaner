#ifndef HTML_CLEANER_EOFTOKEN_H
#define HTML_CLEANER_EOFTOKEN_H

#include "Token.h"

class EOFToken : public Token {
public:
    EOFToken(Position pos) : Token("", pos) {}

    TokenType getType() override {
        return EofToken;
    }
};


#endif //HTML_CLEANER_EOFTOKEN_H
