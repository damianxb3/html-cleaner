#include "Node.h"

Node::Node(const std::string &name, NodeType type, const std::vector<Node *> &children,
           const std::vector<Attribute> &attributes, int level) :
        name(name),
        type(type),
        children(children),
        attributes(attributes),
        level(level) {}

std::string Node::getName() {
    return name;
}

NodeType Node::getType() {
    return type;
}

std::vector<Node *> Node::getChildren() {
    return children;
}

std::vector<Attribute> Node::getAttributes() {
    return attributes;
}

int Node::getLevel() {
    return level;
}
