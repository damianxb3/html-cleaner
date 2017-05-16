#include <iostream>
#include <fstream>
#include <sstream>
#include <memory>
#include "../Lexer.h"
#include "../util.h"

Token getNextToken(Lexer*);
void errorTokenUndefined(Token);

int main() {
    std::cout << "Lexer test running...\n";
    Lexer* lexer = new Lexer("../test/sample1.html");
    Token token;
    while (token.getType() != EndOfFile) {
        token = getNextToken(lexer);
        std::cout << getTokenTypeName(token.getType()) << " = " << token.getValue() << std::endl;
    }
    return 0;
}

Token previousTokens[3];
Token getNextToken(Lexer* lexer) {
    Token token;
    if (previousTokens[2].getType() == Open && previousTokens[1].getValue() == "script" && previousTokens[0].getType() == Close) {
        token = lexer->getScript();

        if (token.getType() == Empty) {
            token = lexer->getNextToken();
        }

        if (token.getType() == Undefined) {
            errorTokenUndefined(token);
        }

        previousTokens[2] = previousTokens[1];
        previousTokens[1] = previousTokens[0];
        previousTokens[0] = token;
        return token;
    }

    if (previousTokens[0].getType() == Close || previousTokens[0].getType() == CloseEmpty || previousTokens[0].getType() == Comment) {
        token = lexer->getText();

        if (token.getType() == Empty) {
            token = lexer->getNextToken();
        }
        if (token.getType() == Undefined) {
            errorTokenUndefined(token);
        }

        previousTokens[2] = previousTokens[1];
        previousTokens[1] = previousTokens[0];
        previousTokens[0] = token;
        return token;
    }

    token = lexer->getNextToken();

    if (token.getType() == Undefined) {
        errorTokenUndefined(token);
    }
    else if (token.getType() == Empty) {
        token = lexer->getNextToken();
        if (token.getType() == Undefined) {
            errorTokenUndefined(token);
        }
    }
    else if (token.getType() == EndOfFile) {
        return token;
    }

    previousTokens[2] = previousTokens[1];
    previousTokens[1] = previousTokens[0];
    previousTokens[0] = token;
    return token;
}

void errorTokenUndefined(Token token) {
    std::cout << "Error! Token undefined: " << token.getValue();
}