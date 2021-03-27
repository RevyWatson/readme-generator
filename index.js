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
        type: 'checkbox',
        message: 'Select a license.',
        name: 'license',
        choices: ['The Unlicense', 'Boost Software License 1.0', 'MIT License', 'Apache License 2.0', 'Mozilla Public License 2.0', 'GNU LGPLv3', 'GNU GPLv3', 'GNU AGPLv3', 'No License'],
        // validate: function (data) {
        //     if (data === 'No License')
        //     return "This application is not licensed at this time.";
        //}
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


//TO-DO:
// When user chooses a license for their application from a list of options a badge for that license is added near
//the top of the README and a notice is added to the section of the README entitled License that explains which 
//license the application is covered under.
