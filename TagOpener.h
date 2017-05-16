#ifndef HTML_CLEANER_TAGOPENER_H
#define HTML_CLEANER_TAGOPENER_H

#include <vector>
#include "Attribute.h"

struct TagOpener {
    std::string name;
    std::vector<Attribute> attributes;

    TagOpener(const std::string &name, std::vector<Attribute> attributes) : name(name), attributes(attributes) {}
};

#endif //HTML_CLEANER_TAGOPENER_H
