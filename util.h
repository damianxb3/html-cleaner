#ifndef HTML_CLEANER_UTIL_H
#define HTML_CLEANER_UTIL_H

#include <string>

bool compareCaseInsensitive(const std::string& str1, const std::string& str2);
std::string toLowerCase(const std::string& in);
bool containsAny(const std::string &text, const std::string &chars);

#endif //HTML_CLEANER_UTIL_H
