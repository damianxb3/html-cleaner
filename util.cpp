#include "util.h"
#include <algorithm>

bool compareCaseInsensitive(const std::string& str1, const std::string& str2)
{
    if (str1.size() != str2.size()) {
        return false;
    }
    return toLowerCase(str1) == toLowerCase(str2);
}

std::string toLowerCase(const std::string& in)
{
    std::string out;
    std::transform(in.begin(), in.end(), std::back_inserter(out), tolower);
    return out;
}

bool containsAny(const std::string &text, const std::string &chars) {
    for (auto& c : text) {
        for (auto &d : chars) {
            if (c == d) {
                return true;
            }
        }
    }
    return false;
}
