#ifndef HTML_CLEANER_POSITION_H
#define HTML_CLEANER_POSITION_H

class Position {
private:
    unsigned int line;
    unsigned int column;
    unsigned int pos;

public:
    Position(unsigned int line = 1,
             unsigned int column = 1,
             unsigned int pos = 0) : line(line), column(column), pos(pos) {}
    unsigned int getLine();
    unsigned int getColumn();
    unsigned int getPos();
    void incLine();
    void incColumn();
    void incPos();
};


#endif //HTML_CLEANER_POSITION_H
