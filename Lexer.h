#ifndef HTML_CLEANER_LEXER_H
#define HTML_CLEANER_LEXER_H

#include <iostream>
#include <memory>
#include "Position.h"
#include "tokens/EOFToken.h"
#include "tokens/DoctypeToken.h"
#include "tokens/CommentOpenToken.h"
#include "tokens/ClosingTagOpenToken.h"
#include "tokens/TagOpenToken.h"
#include "tokens/TagCloseToken.h"
#include "tokens/InlineTagCloseToken.h"
#include "tokens/TextToken.h"
#include "tokens/DoubleQuoteToken.h"
#include "tokens/SingleQuoteToken.h"
#include "tokens/EqualsToken.h"
#include "tokens/CommentCloseToken.h"

class Lexer {
private:
    Position position;
    std::string htmlString;

    char nextChar();
    char currentChar();
    void consume(std::string string);
    bool equals(const std::string& string);
    std::string getNextWord(const char *bound);

public:
    Lexer(const std::string& htmlString);
    std::shared_ptr<Token> getNextToken();
};


#endif //HTML_CLEANER_LEXER_H
