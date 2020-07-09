// function to generate markdown for README
function generateMarkdown(data) {
  return ` 
  # ${data.title}

  ## Description 
  
  ${data.description}
  
  
  ## Table of Contents (Optional)
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation
  
  ${data.installation}
  
  
  ## Usage 
  
  ${data.usage}
  
  ## Credits
  
  ${data.credits}
  
  ## License
  
  ${data.license  === "MIT" ? "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)" : data.license === "GNU GPLv3" ? "[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)" : ""}
  
  
  ## Badges
  
  ${data.badges}
  
  
  ## Contributing
  
  ${data.contributors}
  
  ## Tests
  
  ${data.tests}
  `;
}
  
module.exports = generateMarkdown;
  