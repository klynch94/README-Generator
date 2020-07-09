// // array of questions for user
// const questions = [
// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();



const inquirer = require("inquirer");
const fs = require('fs');

const response = inquirer
  .prompt([
    {
      type: "input",
      message: "Enter your project title..",
      name: "projectName"
    },
    {
      type: "input",
      message: "Provide a description of your project..",
      name: "description"
    },
    {
      type: "input",
      message: "Provide instructions on how to install the application..",
      name: "installation"
    },
    {
        type: "input",
        message: "Provide information on how it is used..",
        name: "usage"
    },
    {
        type: "input",
        message: "List any and all credits..",
        name: "credits"
    },
    {
        type: "list",
        message: "Select what license your application has..",
        name: "license",
        choices: [
            "MIT",
            "GNU GPLv3",
            "Apache License 2.0",
            "ISC License"
        ]
    },
    // {
    //     type: "list",
    //     message: "Select what badges you would like..",
    //     name: "badges",
    //     choices: [

    //     ]
    // },
    {
        type: "input",
        message: "List any and all contributors..",
        name: "contributors"
    },
    {
        type: "input",
        message: "List any tests that a user can perform..",
        name: "tests"
    },
])

const projectResponse = response.projectName;
console.log(projectResponse);