#ifndef HTML_CLEANER_ATTRIBUTE_H
#define HTML_CLEANER_ATTRIBUTE_H

#include <string>

struct Attribute {
    std::string key;
    std::string value;

    Attribute(const std::string &key, const std::string &value) : key(key), value(value) {}
};

#endif //HTML_CLEANER_ATTRIBUTE_H
