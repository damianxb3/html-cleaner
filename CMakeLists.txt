cmake_minimum_required(VERSION 3.6)
project(html_cleaner)

set(CMAKE_CXX_STANDARD 11)

set(SOURCE_FILES test_lexer.cpp Lexer.cpp Lexer.h tokens/Token.cpp tokens/Token.h Position.cpp Position.h tokens/EOFToken.h util.h util.cpp tokens/DoctypeToken.h tokens/CommentOpenToken.h tokens/ClosingTagOpenToken.h tokens/TagOpenToken.h tokens/TagCloseToken.h tokens/InlineTagCloseToken.h tokens/TextToken.h tokens/DoubleQuoteToken.h tokens/SingleQuoteToken.h tokens/EqualsToken.h tokens/CommentCloseToken.h)
add_executable(html_cleaner ${SOURCE_FILES})