#ifndef HTML_CLEANER_TOKEN_H
#define HTML_CLEANER_TOKEN_H

#include <string>
#include "../Position.h"

enum TokenType {
    Doctype,            // <!DOCTYPE
    TagOpen,            // <
    ClosingTagOpen,     // </
    TagClose,           // >
    InlineTagClose,     // />
    Equals,             // =
    DoubleQuote,        // "
    SingleQuote,        // '
    CommentOpen,        // <!--
    CommentClose,       // -->
    EofToken,
    Text
};



class Token {
protected:
    std::string value;
    Position position;
public:
    Token(std::string value, Position position);
    std::string getValue();
    Position getPosition();
    virtual TokenType getType() = 0;
};


#endif //HTML_CLEANER_TOKEN_H
