// files required to make application work.
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// array of questions for user. these prompt the user for the information.
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
          "GNU GPLv3"
      ]
  },
  {
      type: "list",
      message: "Select what badges you would like..",
      name: "badges",
      choices: [
        "Open Source",
        "Ages 20-30",
        "Built With Love",
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

// function to create and write a new markdown file
function writeToFile(readMeString) {
  fs.writeFile("./README.md", readMeString, function (err) {
    if (err) throw err;
    console.log('Success!');
})};

// function to begin the program..
function init() {
  const response = inquirer
  .prompt(questions)
  .then(function(response) { 
    // created an object to save all user responses
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

// initialize program
init();




