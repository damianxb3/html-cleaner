#ifndef HTML_CLEANER_HTMLGENERATOR_H
#define HTML_CLEANER_HTMLGENERATOR_H


#include "HtmlDocument.h"

class HtmlGenerator {
private:
    std::ostream& output;
    int level = 0;
    bool isPrintDoctype = true;
    bool isPrintComments = false;
    bool isPrintAttributes = false;
    bool isPrintScripts = false;
    bool isPrintStyles = false;

public:
    HtmlGenerator(std::ostream &output);

    void generate(HtmlDocument document);
    void printElement(Node* node);

private:

    void printAttributes(Node* node, std::ostream &output);

    void printLevelTabs();
};


#endif //HTML_CLEANER_HTMLGENERATOR_H
