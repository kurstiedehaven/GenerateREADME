// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines for your project.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions for your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username.',

    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please provide instructions on how to reach you with additional questions.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fs = require('fs');
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

function generateREADME(answers) {
        const licenseBadge = `![license](https://img.shields.io/badge/license-${answers.license}-blue)(https://shields.io)`;
        const readmeContent = `
# ${answers.title}

## Table of Contents
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[Contribution](#contribution)
[Test](#test)
[License](#license)
[Questions](#questions)

## [Description](#description)
${answers.description}

## [Installation](#installation)
${answers.installation}

## [Usage](#usage)
${answers.usage}

## [Contribution](#contribution)
${answers.contribution}

## [Test](#test)
${answers.test}

## [License](#license)
This project is licensed under the (${licenseBadge}) license.

## [Questions](#questions)
For additional questions, you can reach me through:
- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: ${answers.email}

---

${answers.questions}
`;

    return readmeContent;

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const readmeContent = generateREADME(answers);
        writeToFile('README.md', readmeContent);
    });
}
// Function call to initialize app
init();
