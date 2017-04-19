#include <cstdio>
#include "Lexer.h"
#include "util.h"

Lexer::Lexer(const std::string &htmlString) {
    this->htmlString = htmlString;
    this->position = Position();
}

std::shared_ptr<Token> Lexer::getNextToken() {
    while (isspace(currentChar())) {
        if (currentChar() == EOF) {
            return std::shared_ptr<Token>(new EOFToken(position));
        }
        nextChar();
    }

    Position curPos = position;
    switch (currentChar()) {
        case '<':
            nextChar();
            if (equals("!DOCTYPE")) {
                consume("!DOCTYPE");
                return std::shared_ptr<Token>(new DoctypeToken(curPos));
            }
            if (equals("!--")) {
                consume("!--");
                return std::shared_ptr<Token>(new CommentOpenToken(curPos));
            }
            if (equals("/")) {
                consume("/");
                return std::shared_ptr<Token>(new ClosingTagOpenToken(curPos));
            }
            return std::shared_ptr<Token>(new TagOpenToken(curPos));

        case '>':
            nextChar();
            return std::shared_ptr<Token>(new TagCloseToken(curPos));

        case '/':
            nextChar();
            if (currentChar() == '>') {
                return std::shared_ptr<Token>(new InlineTagCloseToken(curPos));
            }
            return std::shared_ptr<Token>(new TextToken("/", curPos));

        case '\"':
            nextChar();
            return std::shared_ptr<Token>(new DoubleQuoteToken(curPos));

        case '\'':
            nextChar();
            return std::shared_ptr<Token>(new SingleQuoteToken(curPos));

        case '=':
            nextChar();
            return std::shared_ptr<Token>(new EqualsToken(curPos));

        case '-':
            nextChar();
            if (equals("->")) {
                consume("->");
                return std::shared_ptr<Token>(new CommentCloseToken(curPos));
            }
            return std::shared_ptr<Token>(new TextToken("-", curPos));
        case EOF:
            return std::shared_ptr<Token>(new EOFToken(curPos));
    }
    std::string text = getNextWord("<>/\"\'=-");
    return std::shared_ptr<Token>(new TextToken(text, curPos));
}

char Lexer::nextChar() {
    if (position.getPos() >= htmlString.size()) {
        return EOF;
    }
    if (htmlString[position.getPos()] == '\n') {
        position.incLine();
    }
    else {
        position.incColumn();
    }
    position.incPos();
    return htmlString[position.getPos()-1];
}

char Lexer::currentChar() {
    if (position.getPos() >= htmlString.size()) {
        return EOF;
    }
    return htmlString[position.getPos()];
}

void Lexer::consume(std::string string) {
    for (int i = 0; i < string.size(); i++) {
        nextChar();
    }
}

bool Lexer::equals(const std::string &string) {
    if (position.getPos() + string.size() >= htmlString.size()){
        return false;
    }

    return compareCaseInsensitive(
            htmlString.substr(position.getPos(), string.size()),
            string);
}

std::string Lexer::getNextWord(const char *bound)
{
    std::string word;
    std::locale loc;
    char c;
    while ((c = currentChar()) != EOF && !containsAny(bound, &c) && !isspace(c, loc))
    {
        word.push_back(c);
        nextChar();
    }
    return word;
}
