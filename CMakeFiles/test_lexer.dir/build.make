# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.7

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /home/damian/.local/share/JetBrains/Toolbox/apps/CLion/ch-0/171.4073.41/bin/cmake/bin/cmake

# The command to remove a file.
RM = /home/damian/.local/share/JetBrains/Toolbox/apps/CLion/ch-0/171.4073.41/bin/cmake/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /home/damian/Repositories/html-cleaner

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/damian/Repositories/html-cleaner

# Include any dependencies generated for this target.
include CMakeFiles/test_lexer.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/test_lexer.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/test_lexer.dir/flags.make

CMakeFiles/test_lexer.dir/util.cpp.o: CMakeFiles/test_lexer.dir/flags.make
CMakeFiles/test_lexer.dir/util.cpp.o: util.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/damian/Repositories/html-cleaner/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/test_lexer.dir/util.cpp.o"
	/usr/bin/c++   $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/test_lexer.dir/util.cpp.o -c /home/damian/Repositories/html-cleaner/util.cpp

CMakeFiles/test_lexer.dir/util.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/test_lexer.dir/util.cpp.i"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/damian/Repositories/html-cleaner/util.cpp > CMakeFiles/test_lexer.dir/util.cpp.i

CMakeFiles/test_lexer.dir/util.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/test_lexer.dir/util.cpp.s"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/damian/Repositories/html-cleaner/util.cpp -o CMakeFiles/test_lexer.dir/util.cpp.s

CMakeFiles/test_lexer.dir/util.cpp.o.requires:

.PHONY : CMakeFiles/test_lexer.dir/util.cpp.o.requires

CMakeFiles/test_lexer.dir/util.cpp.o.provides: CMakeFiles/test_lexer.dir/util.cpp.o.requires
	$(MAKE) -f CMakeFiles/test_lexer.dir/build.make CMakeFiles/test_lexer.dir/util.cpp.o.provides.build
.PHONY : CMakeFiles/test_lexer.dir/util.cpp.o.provides

CMakeFiles/test_lexer.dir/util.cpp.o.provides.build: CMakeFiles/test_lexer.dir/util.cpp.o


CMakeFiles/test_lexer.dir/Position.cpp.o: CMakeFiles/test_lexer.dir/flags.make
CMakeFiles/test_lexer.dir/Position.cpp.o: Position.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/damian/Repositories/html-cleaner/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Building CXX object CMakeFiles/test_lexer.dir/Position.cpp.o"
	/usr/bin/c++   $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/test_lexer.dir/Position.cpp.o -c /home/damian/Repositories/html-cleaner/Position.cpp

CMakeFiles/test_lexer.dir/Position.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/test_lexer.dir/Position.cpp.i"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/damian/Repositories/html-cleaner/Position.cpp > CMakeFiles/test_lexer.dir/Position.cpp.i

CMakeFiles/test_lexer.dir/Position.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/test_lexer.dir/Position.cpp.s"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/damian/Repositories/html-cleaner/Position.cpp -o CMakeFiles/test_lexer.dir/Position.cpp.s

CMakeFiles/test_lexer.dir/Position.cpp.o.requires:

.PHONY : CMakeFiles/test_lexer.dir/Position.cpp.o.requires

CMakeFiles/test_lexer.dir/Position.cpp.o.provides: CMakeFiles/test_lexer.dir/Position.cpp.o.requires
	$(MAKE) -f CMakeFiles/test_lexer.dir/build.make CMakeFiles/test_lexer.dir/Position.cpp.o.provides.build
.PHONY : CMakeFiles/test_lexer.dir/Position.cpp.o.provides

CMakeFiles/test_lexer.dir/Position.cpp.o.provides.build: CMakeFiles/test_lexer.dir/Position.cpp.o


CMakeFiles/test_lexer.dir/Token.cpp.o: CMakeFiles/test_lexer.dir/flags.make
CMakeFiles/test_lexer.dir/Token.cpp.o: Token.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/damian/Repositories/html-cleaner/CMakeFiles --progress-num=$(CMAKE_PROGRESS_3) "Building CXX object CMakeFiles/test_lexer.dir/Token.cpp.o"
	/usr/bin/c++   $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/test_lexer.dir/Token.cpp.o -c /home/damian/Repositories/html-cleaner/Token.cpp

CMakeFiles/test_lexer.dir/Token.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/test_lexer.dir/Token.cpp.i"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/damian/Repositories/html-cleaner/Token.cpp > CMakeFiles/test_lexer.dir/Token.cpp.i

CMakeFiles/test_lexer.dir/Token.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/test_lexer.dir/Token.cpp.s"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/damian/Repositories/html-cleaner/Token.cpp -o CMakeFiles/test_lexer.dir/Token.cpp.s

CMakeFiles/test_lexer.dir/Token.cpp.o.requires:

.PHONY : CMakeFiles/test_lexer.dir/Token.cpp.o.requires

CMakeFiles/test_lexer.dir/Token.cpp.o.provides: CMakeFiles/test_lexer.dir/Token.cpp.o.requires
	$(MAKE) -f CMakeFiles/test_lexer.dir/build.make CMakeFiles/test_lexer.dir/Token.cpp.o.provides.build
.PHONY : CMakeFiles/test_lexer.dir/Token.cpp.o.provides

CMakeFiles/test_lexer.dir/Token.cpp.o.provides.build: CMakeFiles/test_lexer.dir/Token.cpp.o


CMakeFiles/test_lexer.dir/Lexer.cpp.o: CMakeFiles/test_lexer.dir/flags.make
CMakeFiles/test_lexer.dir/Lexer.cpp.o: Lexer.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/damian/Repositories/html-cleaner/CMakeFiles --progress-num=$(CMAKE_PROGRESS_4) "Building CXX object CMakeFiles/test_lexer.dir/Lexer.cpp.o"
	/usr/bin/c++   $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/test_lexer.dir/Lexer.cpp.o -c /home/damian/Repositories/html-cleaner/Lexer.cpp

CMakeFiles/test_lexer.dir/Lexer.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/test_lexer.dir/Lexer.cpp.i"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/damian/Repositories/html-cleaner/Lexer.cpp > CMakeFiles/test_lexer.dir/Lexer.cpp.i

CMakeFiles/test_lexer.dir/Lexer.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/test_lexer.dir/Lexer.cpp.s"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/damian/Repositories/html-cleaner/Lexer.cpp -o CMakeFiles/test_lexer.dir/Lexer.cpp.s

CMakeFiles/test_lexer.dir/Lexer.cpp.o.requires:

.PHONY : CMakeFiles/test_lexer.dir/Lexer.cpp.o.requires

CMakeFiles/test_lexer.dir/Lexer.cpp.o.provides: CMakeFiles/test_lexer.dir/Lexer.cpp.o.requires
	$(MAKE) -f CMakeFiles/test_lexer.dir/build.make CMakeFiles/test_lexer.dir/Lexer.cpp.o.provides.build
.PHONY : CMakeFiles/test_lexer.dir/Lexer.cpp.o.provides

CMakeFiles/test_lexer.dir/Lexer.cpp.o.provides.build: CMakeFiles/test_lexer.dir/Lexer.cpp.o


CMakeFiles/test_lexer.dir/Node.cpp.o: CMakeFiles/test_lexer.dir/flags.make
CMakeFiles/test_lexer.dir/Node.cpp.o: Node.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/damian/Repositories/html-cleaner/CMakeFiles --progress-num=$(CMAKE_PROGRESS_5) "Building CXX object CMakeFiles/test_lexer.dir/Node.cpp.o"
	/usr/bin/c++   $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/test_lexer.dir/Node.cpp.o -c /home/damian/Repositories/html-cleaner/Node.cpp

CMakeFiles/test_lexer.dir/Node.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/test_lexer.dir/Node.cpp.i"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/damian/Repositories/html-cleaner/Node.cpp > CMakeFiles/test_lexer.dir/Node.cpp.i

CMakeFiles/test_lexer.dir/Node.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/test_lexer.dir/Node.cpp.s"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/damian/Repositories/html-cleaner/Node.cpp -o CMakeFiles/test_lexer.dir/Node.cpp.s

CMakeFiles/test_lexer.dir/Node.cpp.o.requires:

.PHONY : CMakeFiles/test_lexer.dir/Node.cpp.o.requires

CMakeFiles/test_lexer.dir/Node.cpp.o.provides: CMakeFiles/test_lexer.dir/Node.cpp.o.requires
	$(MAKE) -f CMakeFiles/test_lexer.dir/build.make CMakeFiles/test_lexer.dir/Node.cpp.o.provides.build
.PHONY : CMakeFiles/test_lexer.dir/Node.cpp.o.provides

CMakeFiles/test_lexer.dir/Node.cpp.o.provides.build: CMakeFiles/test_lexer.dir/Node.cpp.o


CMakeFiles/test_lexer.dir/Parser.cpp.o: CMakeFiles/test_lexer.dir/flags.make
CMakeFiles/test_lexer.dir/Parser.cpp.o: Parser.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/damian/Repositories/html-cleaner/CMakeFiles --progress-num=$(CMAKE_PROGRESS_6) "Building CXX object CMakeFiles/test_lexer.dir/Parser.cpp.o"
	/usr/bin/c++   $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/test_lexer.dir/Parser.cpp.o -c /home/damian/Repositories/html-cleaner/Parser.cpp

CMakeFiles/test_lexer.dir/Parser.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/test_lexer.dir/Parser.cpp.i"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/damian/Repositories/html-cleaner/Parser.cpp > CMakeFiles/test_lexer.dir/Parser.cpp.i

CMakeFiles/test_lexer.dir/Parser.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/test_lexer.dir/Parser.cpp.s"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/damian/Repositories/html-cleaner/Parser.cpp -o CMakeFiles/test_lexer.dir/Parser.cpp.s

CMakeFiles/test_lexer.dir/Parser.cpp.o.requires:

.PHONY : CMakeFiles/test_lexer.dir/Parser.cpp.o.requires

CMakeFiles/test_lexer.dir/Parser.cpp.o.provides: CMakeFiles/test_lexer.dir/Parser.cpp.o.requires
	$(MAKE) -f CMakeFiles/test_lexer.dir/build.make CMakeFiles/test_lexer.dir/Parser.cpp.o.provides.build
.PHONY : CMakeFiles/test_lexer.dir/Parser.cpp.o.provides

CMakeFiles/test_lexer.dir/Parser.cpp.o.provides.build: CMakeFiles/test_lexer.dir/Parser.cpp.o


CMakeFiles/test_lexer.dir/HtmlDocument.cpp.o: CMakeFiles/test_lexer.dir/flags.make
CMakeFiles/test_lexer.dir/HtmlDocument.cpp.o: HtmlDocument.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/damian/Repositories/html-cleaner/CMakeFiles --progress-num=$(CMAKE_PROGRESS_7) "Building CXX object CMakeFiles/test_lexer.dir/HtmlDocument.cpp.o"
	/usr/bin/c++   $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/test_lexer.dir/HtmlDocument.cpp.o -c /home/damian/Repositories/html-cleaner/HtmlDocument.cpp

CMakeFiles/test_lexer.dir/HtmlDocument.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/test_lexer.dir/HtmlDocument.cpp.i"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/damian/Repositories/html-cleaner/HtmlDocument.cpp > CMakeFiles/test_lexer.dir/HtmlDocument.cpp.i

CMakeFiles/test_lexer.dir/HtmlDocument.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/test_lexer.dir/HtmlDocument.cpp.s"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/damian/Repositories/html-cleaner/HtmlDocument.cpp -o CMakeFiles/test_lexer.dir/HtmlDocument.cpp.s

CMakeFiles/test_lexer.dir/HtmlDocument.cpp.o.requires:

.PHONY : CMakeFiles/test_lexer.dir/HtmlDocument.cpp.o.requires

CMakeFiles/test_lexer.dir/HtmlDocument.cpp.o.provides: CMakeFiles/test_lexer.dir/HtmlDocument.cpp.o.requires
	$(MAKE) -f CMakeFiles/test_lexer.dir/build.make CMakeFiles/test_lexer.dir/HtmlDocument.cpp.o.provides.build
.PHONY : CMakeFiles/test_lexer.dir/HtmlDocument.cpp.o.provides

CMakeFiles/test_lexer.dir/HtmlDocument.cpp.o.provides.build: CMakeFiles/test_lexer.dir/HtmlDocument.cpp.o


CMakeFiles/test_lexer.dir/HtmlGenerator.cpp.o: CMakeFiles/test_lexer.dir/flags.make
CMakeFiles/test_lexer.dir/HtmlGenerator.cpp.o: HtmlGenerator.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/damian/Repositories/html-cleaner/CMakeFiles --progress-num=$(CMAKE_PROGRESS_8) "Building CXX object CMakeFiles/test_lexer.dir/HtmlGenerator.cpp.o"
	/usr/bin/c++   $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/test_lexer.dir/HtmlGenerator.cpp.o -c /home/damian/Repositories/html-cleaner/HtmlGenerator.cpp

CMakeFiles/test_lexer.dir/HtmlGenerator.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/test_lexer.dir/HtmlGenerator.cpp.i"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/damian/Repositories/html-cleaner/HtmlGenerator.cpp > CMakeFiles/test_lexer.dir/HtmlGenerator.cpp.i

CMakeFiles/test_lexer.dir/HtmlGenerator.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/test_lexer.dir/HtmlGenerator.cpp.s"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/damian/Repositories/html-cleaner/HtmlGenerator.cpp -o CMakeFiles/test_lexer.dir/HtmlGenerator.cpp.s

CMakeFiles/test_lexer.dir/HtmlGenerator.cpp.o.requires:

.PHONY : CMakeFiles/test_lexer.dir/HtmlGenerator.cpp.o.requires

CMakeFiles/test_lexer.dir/HtmlGenerator.cpp.o.provides: CMakeFiles/test_lexer.dir/HtmlGenerator.cpp.o.requires
	$(MAKE) -f CMakeFiles/test_lexer.dir/build.make CMakeFiles/test_lexer.dir/HtmlGenerator.cpp.o.provides.build
.PHONY : CMakeFiles/test_lexer.dir/HtmlGenerator.cpp.o.provides

CMakeFiles/test_lexer.dir/HtmlGenerator.cpp.o.provides.build: CMakeFiles/test_lexer.dir/HtmlGenerator.cpp.o


CMakeFiles/test_lexer.dir/test/test_lexer.cpp.o: CMakeFiles/test_lexer.dir/flags.make
CMakeFiles/test_lexer.dir/test/test_lexer.cpp.o: test/test_lexer.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/damian/Repositories/html-cleaner/CMakeFiles --progress-num=$(CMAKE_PROGRESS_9) "Building CXX object CMakeFiles/test_lexer.dir/test/test_lexer.cpp.o"
	/usr/bin/c++   $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/test_lexer.dir/test/test_lexer.cpp.o -c /home/damian/Repositories/html-cleaner/test/test_lexer.cpp

CMakeFiles/test_lexer.dir/test/test_lexer.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/test_lexer.dir/test/test_lexer.cpp.i"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/damian/Repositories/html-cleaner/test/test_lexer.cpp > CMakeFiles/test_lexer.dir/test/test_lexer.cpp.i

CMakeFiles/test_lexer.dir/test/test_lexer.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/test_lexer.dir/test/test_lexer.cpp.s"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/damian/Repositories/html-cleaner/test/test_lexer.cpp -o CMakeFiles/test_lexer.dir/test/test_lexer.cpp.s

CMakeFiles/test_lexer.dir/test/test_lexer.cpp.o.requires:

.PHONY : CMakeFiles/test_lexer.dir/test/test_lexer.cpp.o.requires

CMakeFiles/test_lexer.dir/test/test_lexer.cpp.o.provides: CMakeFiles/test_lexer.dir/test/test_lexer.cpp.o.requires
	$(MAKE) -f CMakeFiles/test_lexer.dir/build.make CMakeFiles/test_lexer.dir/test/test_lexer.cpp.o.provides.build
.PHONY : CMakeFiles/test_lexer.dir/test/test_lexer.cpp.o.provides

CMakeFiles/test_lexer.dir/test/test_lexer.cpp.o.provides.build: CMakeFiles/test_lexer.dir/test/test_lexer.cpp.o


# Object files for target test_lexer
test_lexer_OBJECTS = \
"CMakeFiles/test_lexer.dir/util.cpp.o" \
"CMakeFiles/test_lexer.dir/Position.cpp.o" \
"CMakeFiles/test_lexer.dir/Token.cpp.o" \
"CMakeFiles/test_lexer.dir/Lexer.cpp.o" \
"CMakeFiles/test_lexer.dir/Node.cpp.o" \
"CMakeFiles/test_lexer.dir/Parser.cpp.o" \
"CMakeFiles/test_lexer.dir/HtmlDocument.cpp.o" \
"CMakeFiles/test_lexer.dir/HtmlGenerator.cpp.o" \
"CMakeFiles/test_lexer.dir/test/test_lexer.cpp.o"

# External object files for target test_lexer
test_lexer_EXTERNAL_OBJECTS =

test_lexer: CMakeFiles/test_lexer.dir/util.cpp.o
test_lexer: CMakeFiles/test_lexer.dir/Position.cpp.o
test_lexer: CMakeFiles/test_lexer.dir/Token.cpp.o
test_lexer: CMakeFiles/test_lexer.dir/Lexer.cpp.o
test_lexer: CMakeFiles/test_lexer.dir/Node.cpp.o
test_lexer: CMakeFiles/test_lexer.dir/Parser.cpp.o
test_lexer: CMakeFiles/test_lexer.dir/HtmlDocument.cpp.o
test_lexer: CMakeFiles/test_lexer.dir/HtmlGenerator.cpp.o
test_lexer: CMakeFiles/test_lexer.dir/test/test_lexer.cpp.o
test_lexer: CMakeFiles/test_lexer.dir/build.make
test_lexer: CMakeFiles/test_lexer.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/home/damian/Repositories/html-cleaner/CMakeFiles --progress-num=$(CMAKE_PROGRESS_10) "Linking CXX executable test_lexer"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/test_lexer.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/test_lexer.dir/build: test_lexer

.PHONY : CMakeFiles/test_lexer.dir/build

CMakeFiles/test_lexer.dir/requires: CMakeFiles/test_lexer.dir/util.cpp.o.requires
CMakeFiles/test_lexer.dir/requires: CMakeFiles/test_lexer.dir/Position.cpp.o.requires
CMakeFiles/test_lexer.dir/requires: CMakeFiles/test_lexer.dir/Token.cpp.o.requires
CMakeFiles/test_lexer.dir/requires: CMakeFiles/test_lexer.dir/Lexer.cpp.o.requires
CMakeFiles/test_lexer.dir/requires: CMakeFiles/test_lexer.dir/Node.cpp.o.requires
CMakeFiles/test_lexer.dir/requires: CMakeFiles/test_lexer.dir/Parser.cpp.o.requires
CMakeFiles/test_lexer.dir/requires: CMakeFiles/test_lexer.dir/HtmlDocument.cpp.o.requires
CMakeFiles/test_lexer.dir/requires: CMakeFiles/test_lexer.dir/HtmlGenerator.cpp.o.requires
CMakeFiles/test_lexer.dir/requires: CMakeFiles/test_lexer.dir/test/test_lexer.cpp.o.requires

.PHONY : CMakeFiles/test_lexer.dir/requires

CMakeFiles/test_lexer.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/test_lexer.dir/cmake_clean.cmake
.PHONY : CMakeFiles/test_lexer.dir/clean

CMakeFiles/test_lexer.dir/depend:
	cd /home/damian/Repositories/html-cleaner && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/damian/Repositories/html-cleaner /home/damian/Repositories/html-cleaner /home/damian/Repositories/html-cleaner /home/damian/Repositories/html-cleaner /home/damian/Repositories/html-cleaner/CMakeFiles/test_lexer.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/test_lexer.dir/depend
