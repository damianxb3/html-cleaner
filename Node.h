#ifndef HTML_CLEANER_NODE_H
#define HTML_CLEANER_NODE_H

#include <iostream>
#include <vector>
#include "Attribute.h"

enum NodeType {
    SingleTagNode,
    DoubleTagNode,
    InlineTagNode,
    TextNode,
    CommentNode
};

class Node {
private:
    std::string name;
    NodeType type;
    std::vector<Node*> children;
    std::vector<Attribute> attributes;
    int level;
public:
    Node(const std::string &name, NodeType type, const std::vector<Node *> &children,
         const std::vector<Attribute> &attributes, int level);

    std::string getName();
    NodeType getType();
    std::vector<Node*> getChildren();
    std::vector<Attribute> getAttributes();
    int getLevel();
};


#endif
