#ifndef HTML_CLEANER_HTMLGENERATOR_H
#define HTML_CLEANER_HTMLGENERATOR_H


#include "HtmlDocument.h"
#include "Configuration.h"
#include "Parser.h"

class HtmlGenerator {
private:
    std::ofstream output;
    std::set<CleanerOption> options;
    Parser* parser;
    int level = 0;
    std::vector<Node*> parentNodes = {};

public:
    HtmlGenerator(Configuration& configuration);
    ~HtmlGenerator();
    void generate();
private:
    void printElement(Node* node);
    void printAttributes(Node* node, std::ostream &output);
    void printLevelTabs();
    bool isOptionSet(CleanerOption option);
    void printStructure(HtmlDocument& htmlDocument);

    void printOneNodeToStructureOutput(Node* node);

    bool isChildrenTextNodes(Node* parentNode);
};


#endif //HTML_CLEANER_HTMLGENERATOR_H
