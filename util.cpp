#include "util.h"
#include <algorithm>

bool compareCaseInsensitive(const std::string& str1, const std::string& str2) {
    if (str1.size() != str2.size()) {
        return false;
    }
    return toLowerCase(str1) == toLowerCase(str2);
}

std::string toLowerCase(const std::string& in) {
    std::string out;
    std::transform(in.begin(), in.end(), std::back_inserter(out), tolower);
    return out;
}

/**
 * Checks if the tag can be written without any closing symbol, e.g. <area> instead of <area>...</area> or <area/>
 */
bool isSingleTag(const std::string &tag) {
    std::vector<std::string> singleTags = {
            "br", "meta", "area", "base", "basefont", "br", "col", "embed", "hr", "img",
            "input", "keygen", "link", "meta", "param", "source", "track", "wbr"
    };
    return std::find(singleTags.begin(), singleTags.end(), tag) != singleTags.end();
}

std::string getTokenTypeName(TokenType tokenType) {
    switch (tokenType) {
        case OpenDoctype:
            return "OpenDoctype";
        case Open:
            return "Open";
        case OpenEnd:
            return "OpenEnd";
        case Close:
            return "Close";
        case Name:
            return "Name";
        case Equals:
            return "Equals";
        case Value:
            return "Value";
        case Text:
            return "Text";
        case CloseEmpty:
            return "CloseEmpty";
        case Comment:
            return "Comment";
        case EndOfFile:
            return "EndOfFile";
        case Empty:
            return "Empty";
        case Undefined:
            return "Undefined";
    }
}
