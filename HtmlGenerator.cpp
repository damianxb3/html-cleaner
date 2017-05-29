#include "HtmlGenerator.h"

HtmlGenerator::HtmlGenerator(std::ostream &output) : output(output) {}

void HtmlGenerator::generate(HtmlDocument document) {

    if (isPrintDoctype) {
        output << "<!DOCTYPE" << document.getDoctype()->getName() << ">\n";
    }

    if (isPrintComments) {
        for (auto comment : document.getRootComments()) {
            output << "<!--" << comment->getName() << "-->\n";
        }
    }

    printElement(document.getRootNode());
}

void HtmlGenerator::printElement(Node* node) {
    printLevelTabs();

    if (node->getType() == CommentNode) {
        if (!isPrintComments) {
            return;
        }
        output << "<!--" << node->getName() << "-->\n";
        return;
    }

    if (node->getType() == TextNode) {
        output << node->getName() << "\n";
        return;
    }

    if (!isPrintScripts && node->getName() == "script") {
        return;
    }

    if (!isPrintStyles && node->getName() == "style") {
        return;
    }

    output << "<" << node->getName();
    if (isPrintAttributes) {
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
