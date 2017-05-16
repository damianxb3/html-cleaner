#include "Token.h"

Token::Token(TokenType type, std::string value, Position position) {
    this->type = type;
    this->value = value;
    this->position = position;
}

Token::Token(TokenType type, std::string value, Position position, char quoteType) {
    this->type = type;
    this->value = value;
    this->position = position;
    this->quoteType = quoteType;
}

TokenType Token::getType() {
    return type;
}

std::string Token::getValue() {
    return value;
}

Position Token::getPosition() {
    return position;
}
