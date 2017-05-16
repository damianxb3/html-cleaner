#include "HtmlDocument.h"

HtmlDocument::HtmlDocument(Node *doctype,
                           const std::vector<Node *> &rootComments,
                           Node *rootNode) :
        doctype(doctype),
        rootComments(rootComments),
        rootNode(rootNode) {}

Node *HtmlDocument::getDoctype() const {
    return doctype;
}

const std::vector<Node *> &HtmlDocument::getRootComments() const {
    return rootComments;
}

Node *HtmlDocument::getRootNode() const {
    return rootNode;
}

void HtmlDocument::printDOM() {
    std::cout << "<!DOCTYPE" + doctype->getName() + ">" << std::endl;
    printRootComments();
    printNode(rootNode);
}

void HtmlDocument::printRootComments() {
    for (auto rootComment : rootComments) {
        std::cout << "<!-- " << rootComment->getName() << " -->" << std::endl;
    }
}

void HtmlDocument::printNode(Node *node) {
    for (int i = 1; i < node->getLevel(); i++) {
        std::cout << "--";
    }
    std::cout << node->getName() << std::endl;
    for (auto nodeChild : node->getChildren()) {
        printNode(nodeChild);
    }
}
