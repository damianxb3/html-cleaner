#include <iostream>
#include <fstream>
#include <sstream>
#include <memory>
#include "../Parser.h"

int main() {
    std::cout << "\nParser test running...\n";
    Lexer *lexer = new Lexer("../test/sample1.html");
    Parser parser = Parser(lexer);
    HtmlDocument htmlDocument = parser.parse();
    htmlDocument.printDOM();
    return 0;
}