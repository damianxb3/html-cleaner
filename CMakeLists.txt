cmake_minimum_required(VERSION 3.6)
project(html_cleaner)

set(CMAKE_CXX_STANDARD 11)

set(COMMON_SOURCE_FILES
        util.h util.cpp
        Position.h Position.cpp
        Token.h Token.cpp
        Lexer.h Lexer.cpp
        Attribute.h
        Node.h
        Node.cpp
        Parser.h
        Parser.cpp)

set(MAIN_SOURCE_FILES
        ${COMMON_SOURCE_FILES}
        main.cpp)
add_executable(html_cleaner ${MAIN_SOURCE_FILES})

set(LEXER_TEST_SOURCE_FILES
        ${COMMON_SOURCE_FILES}
        test/test_lexer.cpp)
add_executable(test_lexer ${LEXER_TEST_SOURCE_FILES})

set(PARSER_TEST_SOURCE_FILES
        ${COMMON_SOURCE_FILES}
        test/test_parser.cpp)
add_executable(test_parser ${PARSER_TEST_SOURCE_FILES})