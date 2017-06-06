cmake_minimum_required(VERSION 3.6)
project(html_cleaner)
set(CMAKE_CXX_STANDARD 11)

### Common ###
set(COMMON_SOURCE_FILES
        util.h util.cpp
        Position.h Position.cpp
        Token.h Token.cpp
        Lexer.h Lexer.cpp
        Attribute.h
        TagOpener.h
        Node.h Node.cpp
        Parser.h Parser.cpp
        HtmlDocument.h HtmlDocument.cpp)

### Main ###
set(MAIN_SOURCE_FILES
        ${COMMON_SOURCE_FILES}
        main.cpp
        CleanerOption.h
        Configuration.h Configuration.cpp
        HtmlGenerator.cpp HtmlGenerator.h)
add_executable(html_cleaner ${MAIN_SOURCE_FILES})
target_link_libraries (html_cleaner boost_program_options)
target_link_libraries (html_cleaner boost_system)
target_link_libraries (html_cleaner boost_filesystem)

### Lexer test ###
set(LEXER_TEST_SOURCE_FILES
        ${COMMON_SOURCE_FILES}
        test/test_lexer.cpp)
add_executable(test_lexer ${LEXER_TEST_SOURCE_FILES})

### Parser test ###
set(PARSER_TEST_SOURCE_FILES
        ${COMMON_SOURCE_FILES}
        test/test_parser.cpp)
add_executable(test_parser ${PARSER_TEST_SOURCE_FILES})

### Generator test ###
set(GENERATOR_TEST_SOURCE_FILES
        ${COMMON_SOURCE_FILES}
        CleanerOption.h
        Configuration.h Configuration.cpp
        HtmlGenerator.cpp HtmlGenerator.h
        test/test_generator.cpp)
add_executable(test_generator ${GENERATOR_TEST_SOURCE_FILES})