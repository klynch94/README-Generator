 The application generates a ReadMe markdown file based on prompts made within the command line. I used the npm Inquirer package to generate prompts and saved the users input into a ReadMe template. There is a table of contents that is linked to certain sections of the file if it becomes lengthy.
 
 Below is an example of a ReadMe file that is generated from the application:
 
  # README Generator

  ## Description 
  
  This application provides the ability to generate README.md files by following prompts and questions about the application
  
  
  ## Table of Contents (Optional)
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation
  
  First you have to install the Inquirier package from npm, then you have to run the application in Node
  
  
  ## Usage 
  
  The application prompts the user with questions about their project, and uses those responses to create a README file for said project
  
  ## Credits
  
  GitHub badges and licenses
  
  ## License
  
  [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
  
  
  ## Badges
  
  [![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://GitHub.com/Naereen/)
  
  
  ## Contributing
  
  Kieran Lynch
  
  ## Tests
  
  After the prompts have been followed, make sure a README.md file is added to your project folder. Also, run a preview on this file to ensure all badges and licenses are inserted properly.
  
