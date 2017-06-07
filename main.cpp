#include <boost/program_options.hpp>
#include <boost/filesystem.hpp>
#include <iostream>
#include "Configuration.h"
#include "HtmlGenerator.h"

namespace po = boost::program_options;

void initializeConfiguration(Configuration& configuration, int argc, char** argv);
void runGenerator(Configuration& configuration);

int main(int argc, char **argv) {
    Configuration configuration = Configuration();
    initializeConfiguration(configuration, argc, argv);
    runGenerator(configuration);
}

void initializeConfiguration(Configuration& configuration, int argc, char** argv) {
    po::options_description options_d("HtmlCleaner options:");
    options_d.add_options()
            ("help,h", "Show help screen")
            ("attributes,a", "Clean attributes if present")
            ("styles,s", "Clean styles if present")
            ("scripts,S", "Clean scripts if present")
            ("doctype,D", "Clean doctype")
            ("comments,c", "Clean comments")
            ("input-file", "Input file")
            ("output-file", "Output file");

    po::positional_options_description positional_options_d;
    positional_options_d.add("input-file", 1);
    positional_options_d.add("output-file", 1);

    po::variables_map vm;

    auto options = po::command_line_parser(argc, argv)
            .options(options_d)
            .positional(positional_options_d)
            .run();

    po::store(options, vm);
    po::notify(vm);

    if (vm.count("help")) {
    std::cout << options_d << std::endl;
    }

    if (vm.count("attributes")) {
        configuration.addCleaningOption(ATTRIBUTES_OPTION);
    }

    if (vm.count("styles")) {
        configuration.addCleaningOption(STYLES_OPTION);
    }

    if (vm.count("scripts")) {
        configuration.addCleaningOption(SCRIPTS_OPTION);
    }

    if (vm.count("comments")) {
        configuration.addCleaningOption(COMMENTS_OPTION);
    }

    if (vm.count("doctype")) {
        configuration.addCleaningOption(DOCTYPE_OPTION);
    }

    if (!vm.count("input-file")) {
        std::cout << "You must specify input file." << std::endl;
        exit(1);
    }

    auto inputFilePath = vm["input-file"].as<std::string>();
    if (!boost::filesystem::exists(inputFilePath)) {
        std::cout << "Given input file does not exist." << std::endl;
        exit(1);
    }

    configuration.setInputFile(inputFilePath);

    if (!vm.count("output-file")) {
        auto outputFilePath = inputFilePath.substr(0, inputFilePath.find_last_of('.')) + ".out.html";
        configuration.setOutputFile(outputFilePath);
        return;
    }

    auto outputFilePath = vm["output-file"].as<std::string>();
    if (!boost::filesystem::exists(inputFilePath)) {
        std::cout << "Given output file does not exist." << std::endl;
        exit(1);
    }
    configuration.setOutputFile(outputFilePath);
}

void runGenerator(Configuration& configuration) {
    std::cout << "HtmlCleaner is running..." << std::endl;
    auto generator = new HtmlGenerator(configuration);
    generator->generate();
    std::cout << "Clean HTML file has been generated. Path: " << boost::filesystem::canonical(configuration.getOutputFilePath()) << std::endl;
}
