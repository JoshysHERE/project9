// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Project Title?',
    },
    {
      type: 'input',
      name: 'name',
      message: 'Project Description?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'Installation?',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Usage?',
      },
      {
        type: 'checkbox',
        name: 'name',
        message: 'License?',
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Contributing?',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Tests?',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Questions?',
      },
    ]);

// TODO: Create an array of questions for user input
const questions = ['Project Title?, Project Description?, Install?, Usage?, License?, Contributing?, Tests?, Questions?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
      console.log("Creating README.md File...");
      writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
    });
  }
  init();