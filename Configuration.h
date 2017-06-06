#ifndef HTML_CLEANER_CONFIGURATION_H
#define HTML_CLEANER_CONFIGURATION_H

#include <iostream>
#include <set>
#include "CleanerOption.h"

class Configuration {
private:
    std::set<CleanerOption> cleanerOptions;
    std::string inputFilePath;
    std::string outputFilePath;

public:
    void addCleaningOption(CleanerOption cleanerOption);
    void setInputFile(const std::string &inputFile);
    void setOutputFile(const std::string &outputFile);
    std::set<CleanerOption> getOptions();
    std::string& getInputFilePath();
    std::string& getOutputFilePath();
};


#endif //HTML_CLEANER_CONFIGURATION_H
