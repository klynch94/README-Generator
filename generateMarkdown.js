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
  
  ${data.badges === "Open Source" ? "[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)" : data.badges === "Ages 20-30" ? "[![ForTheBadge 20-30](http://ForTheBadge.com/images/badges/ages-20-30.svg)](http://ForTheBadge.com)" : data.badges === "Built With Love" ? "[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://GitHub.com/Naereen/)" : ""}
  
  
  ## Contributing
  
  ${data.contributors}
  
  ## Tests
  
  ${data.tests}
  `;
}
  
module.exports = generateMarkdown;
  