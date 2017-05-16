#ifndef HTML_CLEANER_TOKEN_H
#define HTML_CLEANER_TOKEN_H

#include <string>
#include "Position.h"

enum TokenType {
    OpenDoctype,
    Open,
    OpenEnd,
    Close,
    Name,
    Equals,
    Value,
    Text,
    CloseEmpty,
    Comment,
    EndOfFile,
    Empty,
    Undefined
};

class Token {
private:
    TokenType type;
    std::string value;
    Position position;
    char quoteType;

public:
    Token(TokenType type = Empty, std::string value = "", Position position = Position(0, 0, 0));
    Token(TokenType type, std::string value, Position position, char quoteType);
    TokenType getType();
    std::string getValue();
    Position getPosition();
};


#endif //HTML_CLEANER_TOKEN_H