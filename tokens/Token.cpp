#include "Token.h"

Token::Token(std::string value, Position position) : value(value), position(position) {}

Position Token::getPosition() {
    return position;
}

std::string Token::getValue() {
    return value;
}