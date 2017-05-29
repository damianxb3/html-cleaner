#include <iostream>
#include <fstream>
#include <sstream>
#include <memory>
#include "../Parser.h"
#include "../HtmlGenerator.h"

int main() {
    std::cout << "\nGenerator test running...\n";
    Lexer *lexer = new Lexer("../test/onet/Onet.pl.html");
    Parser *parser = new Parser(lexer);
    HtmlDocument htmlDocument = parser->parse();
    HtmlGenerator *htmlGenerator = new HtmlGenerator(std::cout);
    htmlGenerator->generate(htmlDocument);
    return 0;
}