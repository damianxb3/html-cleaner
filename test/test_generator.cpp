#include <iostream>
#include <fstream>
#include <sstream>
#include <memory>
#include "../Parser.h"
#include "../HtmlGenerator.h"

int main() {
    std::cout << "\nGenerator test running...\n";
    Configuration configuration;
    configuration.setInputFile("../test/onet/Onet.pl.html");
    configuration.setOutputFile("../test/onet/Onet.pl.out.html");

    HtmlGenerator *htmlGenerator = new HtmlGenerator(configuration);
    htmlGenerator->generate();
    return 0;
}