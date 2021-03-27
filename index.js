// packages and linked utilities needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

// questions for user input

inquirer.prompt([
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? This is required for license badge.'
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What is the name of the GitHub repository for this application? This is required for license badge.'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?',
    },
    {
        type: 'input',
        name: 'summary',
        message: 'Provide a short description about the application.',
    },
    {
        type: 'input',
        message: 'Provide a detailed description of the installation process.',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples to explain how to use this application.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Credit any contributers or content that helped createt this application.',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'Provide tests examples for this application.',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Select a license.',
        name: 'license',
        choices: ['TheUnlicense', 'BoostSoftwareLicense1.0', 'MIT', 'ApacheLicense2.0', 'MozillaPublicLicense2.0', 'GNULGPLv3', 'GNUGPLv3', 'GNUAGPLv3', 'none'],
    },
    {
        type: 'input',
        message: 'Provide an email address and instructions for users and or other developers to contact you with questions about your application.',
        name: 'contact',
    },
])


    // writes README file

    .then((data) => {
        const readMeContent = generateMarkdown(data);

        fs.writeFile('README.md', readMeContent, (err) =>
            err ? console.log(err) : console.log('Huzzah! Your README.md file was successfully generated!')
        );
    });