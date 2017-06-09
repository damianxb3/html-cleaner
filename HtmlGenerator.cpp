#include "HtmlGenerator.h"

HtmlGenerator::HtmlGenerator(Configuration& configuration) {
    options = configuration.getOptions();
    auto lexer = new Lexer(configuration.getInputFilePath());
    parser = new Parser(lexer);
    output.open(configuration.getOutputFilePath(), std::ofstream::out);
}

HtmlGenerator::~HtmlGenerator() {
    output.close();
}

void HtmlGenerator::generate() {
    HtmlDocument htmlDocument = parser->parse();

    if (!isOptionSet(DOCTYPE_OPTION)) {
        output << "<!DOCTYPE" << htmlDocument.getDoctype()->getName() << ">\n";
    }

    if (!isOptionSet(COMMENTS_OPTION)) {
        for (auto comment : htmlDocument.getRootComments()) {
            output << "<!--" << comment->getName() << "-->\n";
        }
    }

    printElement(htmlDocument.getRootNode());
    output.close();

    printStructure(htmlDocument);

//    delete &htmlDocument;
}


void HtmlGenerator::printElement(Node* node) {
    if (node->getType() == CommentNode) {
        if (isOptionSet(COMMENTS_OPTION)) {
            return;
        }
        printLevelTabs();
        output << "<!--" << node->getName() << "-->\n";
        return;
    }

    if (node->getType() == TextNode) {
        printLevelTabs();
        output << node->getName() << "\n";
        return;
    }

    if (isOptionSet(SCRIPTS_OPTION) && node->getName() == "script") {
        return;
    }

    if (isOptionSet(STYLES_OPTION) && node->getName() == "style") {
        return;
    }

    printLevelTabs();
    output << "<" << node->getName();
    if (!isOptionSet(ATTRIBUTES_OPTION)) {
        printAttributes(node, output);
    }

    if (node->getType() == SingleTagNode) {
        output << ">\n";
        return;
    }

    if (node->getType() == InlineTagNode) {
        output << "/>\n";
        return;
    }

    if (node->getType() == DoubleTagNode) {
        output << ">";
    }

    if (node->getType() != CommentNode && node->getType() != TextNode) {
        output << "\n";
    }

    for (auto child : node->getChildren()) {
        level++;
        printElement(child);
        level--;
    }

    if (node->getType() == DoubleTagNode) {
        for (int i = 0; i < level; i++) {
            output << "  ";
        }

        output << "</" << node->getName() << ">";
    }
    output << "\n";
}

void HtmlGenerator::printLevelTabs() {
    for (int i = 0; i < level; i++) {
        output << "  ";
    }
}

void HtmlGenerator::printAttributes(Node* node, std::ostream &output) {
    for (auto attribute : node->getAttributes()) {
        output << " " + attribute.key + (attribute.value != "" ? ("=\"" + attribute.value + "\"") : "");
    }
}

bool HtmlGenerator::isOptionSet(CleanerOption option) {
    return options.find(option) != options.end();
}

void HtmlGenerator::printStructure(HtmlDocument& htmlDocument) {
    parentNodes = {};
    std::cout << "DOM structure: " << std::endl;
    printOneNodeToStructureOutput(htmlDocument.getRootNode());
}

void HtmlGenerator::printOneNodeToStructureOutput(Node* node) {
    parentNodes.push_back(node);
    if (node->getChildren().empty() || isChildrenTextNodes(node)) {
        if (node->getType() != TextNode && node->getType() != CommentNode) {
            for (auto parentNode : parentNodes) {
                std::cout << parentNode->getName();
                if (parentNode != node) {
                    std::cout << " -> ";
                }
            }
            std::cout << std::endl;
        }
    } else {
        for (auto child : node->getChildren()) {
            printOneNodeToStructureOutput(child);
        }
    }
    parentNodes.pop_back();
}

bool HtmlGenerator::isChildrenTextNodes(Node* parentNode) {
    for (auto child : parentNode->getChildren()) {
        if (child->getType() != TextNode) {
            return false;
        }
    }
    return true;
}
