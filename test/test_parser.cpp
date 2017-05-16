#include <iostream>
#include <fstream>
#include <sstream>
#include <memory>
#include "../Parser.h"

int main() {
    std::cout << "\nParser test running...\n";
    Lexer *lexer = new Lexer("../test/sample1.html");
    Parser parser = Parser(lexer);
    parser.parse();
    parser.printDOM();
    return 0;
}