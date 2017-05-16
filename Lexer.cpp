#include <cstdio>
#include <algorithm>
#include "Lexer.h"
#include "util.h"

Lexer::Lexer(std::string file) {
    htmlSource.open(file, std::ifstream::in);
    this->position = Position();
}

Lexer::~Lexer() {
    htmlSource.close();
}

Token Lexer::getNextToken() {
    consumeWhiteSpaces();

    if (currentChar == EOF) {
        return Token(EndOfFile, " ", Position(0, 0, 0));
    }

    switch (currentChar) {
        case '<':
            return handleBeginningTag();
        case '=':
            return Token(Equals, "=", position);
        case '/':
            if (getChar() == '>') {
                return Token(CloseEmpty, "/>", position);
            } else {
                return Token(Text, "/", position);
            }
        case '>':
            return Token(Close, ">", position);
        case '"':
            return handleValueTag('"');
        case '\'':
            return handleValueTag('\'');
        default:
            if (currentChar >= '1' && currentChar <= '9') {
                return handleNumericValueToken();
            }
            if (currentChar >= 'A' && currentChar <= 'Z' || currentChar >= 'a' && currentChar <= 'z') {
                return handleNameToken();
            }
            return undefinedToken();
    }
}

Token Lexer::getText() {
    std::string text;

    while (showChar() != EOF && showChar() != '<') {
        text += getChar();
    }

    if (std::all_of(text.begin(), text.end(), isspace)) {
        return Token(Empty, text, position);
    }

    return Token(Text, text, position);
}

Token Lexer::getScript() {
    const std::string scriptEnding("</script>");
    std::string script;
    while (showChar() != EOF && showChars(scriptEnding.length()) != scriptEnding) {
        script += getChar();
    }
    getChars(scriptEnding.length());
    return Token(Text, script, position);
}

char Lexer::getChar() {
    char currentChar = showChar();

    if (currentChar == EOF) {
        return (char) htmlSource.get();
    }

    if (currentChar == '\n') {
        this->position.incLine();
    } else {
        this->position.incColumn();
    }
    this->position.incPos();

    return (char) htmlSource.get();
}


char Lexer::showChar() {
    return (char) htmlSource.peek();
}

std::string Lexer::getUntil(char limit) {
    std::string result;
    while (showChar() != EOF && showChar() != limit) {
        result.push_back(getChar());
    }
    return result;
}

std::string Lexer::getChars(unsigned long length) {
    std::string value;
    for (int i = 0; i < length; i++) {
        value += getChar();
    }
    return value;
}

std::string Lexer::showChars(unsigned long length) {
    std::string value;
    auto pos = htmlSource.tellg();
    value = getChars(length);
    htmlSource.seekg(pos);
    return value;
}

void Lexer::consumeWhiteSpaces() {
    currentChar = getChar();
    while (isspace(currentChar) && currentChar != EOF) {
        currentChar = getChar();
    }
}

Token Lexer::undefinedToken(const std::string &value) {
    return Token(Undefined, value, position);
}

Token Lexer::handleBeginningTag() {
    currentChar = showChar();
    if (isspace(currentChar) || isalnum(currentChar)) {
        return Token(Open, "<", position);
    }
    if (currentChar == '/') {
        getChar();
        return Token(OpenEnd, "</", position);
    }
    if (currentChar == '!') {
        getChar();
        if (compareCaseInsensitive (showChars(std::string("doctype").length()), "doctype")) {
            getChars(std::string("doctype").length());
            return Token(OpenDoctype, getUntil('>'), position);
        }
        if (showChars(std::string("--").length()) == "--") {
            return handleComment();
        } else {
            return undefinedToken("<!" + getChar());
        }
    }
    return undefinedToken("<" + getChar());
}

Token Lexer::handleValueTag(char quote) {
    std::string value = getUntil(quote);
    getChar();
    return Token(Value, value, position, quote);
}

Token Lexer::handleNameToken() {
    std::string value;
    value += currentChar;
    while (!isspace(showChar())
           && showChar() != '>'
           && showChar() != '='
           && showChar() != '/') {
        if (isalpha(showChar())
            || showChar() >= '1' && showChar() <= '6'
            || showChar() == ':'
            || showChar() == '-'
            || showChar() == '<')
            value += getChar();
        else {
            value += getChar();
            return undefinedToken(value);
        }
    }
    return Token(Name, value, position);
}

Token Lexer::handleNumericValueToken() {
    std::string value;
    value += currentChar;
    while (isdigit(showChar())) {
        value += getChar();
    }
    return Token(Value, value, position);
}

Token Lexer::handleComment() {
    std::string comment;
    getChars(std::string("--").length());
    while (showChars(3) != "-->") {
        comment += getChar();
    }
    getChars(std::string("-->").length());
    return Token(Comment, comment, position);
}
