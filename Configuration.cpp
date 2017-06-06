#include "Configuration.h"

void Configuration::addCleaningOption(CleanerOption cleanerOption) {
    cleanerOptions.insert(cleanerOption);
}

void Configuration::setInputFile(const std::string &inputFile) {
    inputFilePath = inputFile;
}

void Configuration::setOutputFile(const std::string &outputFile) {
    outputFilePath = outputFile;
}

std::set<CleanerOption> Configuration::getOptions() {
    return cleanerOptions;
}

std::string &Configuration::getInputFilePath() {
    return inputFilePath;
}

std::string &Configuration::getOutputFilePath() {
    return outputFilePath;
}
