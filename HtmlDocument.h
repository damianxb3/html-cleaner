#ifndef HTML_CLEANER_HTMLDOCUMENT_H
#define HTML_CLEANER_HTMLDOCUMENT_H

#include "Node.h"

class HtmlDocument {
private:
    Node* doctype;
    std::vector<Node*> rootComments;
    Node* rootNode;

public:
    HtmlDocument(Node *doctype, const std::vector<Node *> &rootComments, Node *rootNode);
    Node *getDoctype() const;
    const std::vector<Node *> &getRootComments() const;
    Node *getRootNode() const;
    void printDOM();

private:
    void printRootComments();
    void printNode(Node *node);
};


#endif //HTML_CLEANER_HTMLDOCUMENT_H
