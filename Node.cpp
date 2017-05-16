#include "Node.h"

Node::Node(const std::string &name,
           NodeType type,
           const std::vector<Node *> &parents,
           const std::vector<Node *> &children,
           const std::vector<Attribute> &attributes,
           int nestedLevel)
        : name(name), type(type), parents(parents), children(children), attributes(attributes), level(nestedLevel) {}

std::string Node::getName() {
    return name;
}

NodeType Node::getType() {
    return type;
}

std::vector<Node *> Node::getParents() {
    return parents;
}

void Node::setParents(std::vector<Node *> parent) {
    this->parents = parents;
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
