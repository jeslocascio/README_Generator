// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// Creates an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide a installation instructions for your project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage instructions for your project',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide provide a list of contributers for your project',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions for your project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: [
            "MIT License",
            "BSD 3-Clause License",
            "GPLv3 License",
            "Apache 2.0",
        ],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHUb username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address',
    },
];

// A function to write the README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, err => console.error(err));
}

// A function to initialize the app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const markDown = generateMarkdown(data);
        writeToFile("README.md", markDown);
        console.log("README created successfully!");
    })
    .catch(err => console.error(err));
}

// A function to call the initialized app
init();
