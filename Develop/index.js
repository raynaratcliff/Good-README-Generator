//Included packages needed for this application: Requirments 
const { clear } = require("console");
const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

//introduction message 
console.log('Welcome, let\'s generate a README.md file.');
// An array of questions for user input
const questions = [
        {
          type: "input",
          name: 'title',
          message: 'What is the title of the project?',
        },
        {
          type: "input",
          name: 'description',
          message: 'Provide a description of the project.',
        },
        {
          type: "input",
          name: 'installation',
          message: 'What is the installation instructions for this application?',
        },
        {
          type: "input",
          name: 'usage',
          message: 'How is the application used?',
        },
        {
          type: "checkbox",
          name: 'license',
          message: 'Which license should be used?',
          choices: [
            'MIT', 
            'ISC', 
            'Creative Commons', 
            'GNU GPLv3',
            'Apache License 2.0',
            'European Union Public License 1.1',
          ],
        },
        {
          type: "input",
          name: 'contributing',
          message: 'Who contributed to this project?',
        },
        {
          type: "input",
          name: 'tests',
          message: 'How do you test this project?',
        },
        {
          type: "input",
          name: 'githubUsername',
          message: 'What is your Github Username?',
        },
        {
          type: "input",
          name: 'email',
          message: 'What is your email?',
        },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,err => {
      if (err) throw err;
      console.log('Success!');
    });
  }
  
  // function to initialize program
  async function init() {
    const answers = await inquirer.prompt(questions);
    const markdown = generateMarkdown(answers);
    writeToFile('generated-README.md', markdown);
  }
  
  // function call to initialize program
  init();