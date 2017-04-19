#include "Position.h"

unsigned int Position::getLine() {
    return line;
}

unsigned int Position::getColumn() {
    return column;
}

unsigned int Position::getPos() {
    return pos;
}

void Position::incLine() {
    line++;
    column = 1;
}

void Position::incColumn() {
    column++;
}

void Position::incPos() {
    pos++;
}
