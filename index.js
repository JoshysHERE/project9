// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
{

      type: 'input',
      name: 'title',
      message: 'Project Title?',
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'License?',
      choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
   
    },
    {
      type: 'input',
      name: 'description',
      message: 'Project Description?',
    },
    {

        type: "input",
        name: "link",
        message: "Please provide a URL where a user can access your deployed application!"
      },
      {

        type: 'input',
        name: 'installation',
        message: 'Installation?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Usage?',
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Contributors?',
        default:"",
      },
      {
        type: 'input',
        name: 'tests',
        message: 'tests?',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Questions?',
      },
      {
      type: "input",
      name: "email",
      message: "Provide a valid email address.",
    },
    
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
      console.log("Creating README.md File...");
      writeToFile("./README.md", generateMarkdown({ ...responses }));
    });
  }
  init();