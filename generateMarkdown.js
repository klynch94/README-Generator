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
  
  ${data.license}
  
  
  ## Badges
  
  ${data.badges}
  
  
  ## Contributing
  
  ${data.contributors}
  
  ## Tests
  
  ${data.tests}
  `;
}
  
module.exports = generateMarkdown;
  