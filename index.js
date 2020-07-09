const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// array of questions for user
const questions = [
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
  {
      type: "list",
      message: "Select what badges you would like..",
      name: "badges",
      choices: [
        "Last updated 5 mins ago",
        "License MIT",
        "0 GitHub issues",
      ]
  },
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
];

// function to write README file
function writeToFile(readMeString) {
  fs.writeFile("./README.md", readMeString, function (err) {
    if (err) throw err;
    console.log('Success!');
})};

// function to initialize program
function init() {
  const response = inquirer
  .prompt(questions)
  .then(function(response) { 
    const data ={}
    data.title = response.projectName;
    data.description = response.description;
    data.installation = response.installation;
    data.usage = response.usage;
    data.credits = response.credits;
    data.license = response.license;
    data.badges = response.badges;
    data.contributors = response.contributors;
    data.tests = response.tests;
  
    const readMeString = generateMarkdown(data);
    writeToFile(readMeString);
});
}

// function call to initialize program
init();




