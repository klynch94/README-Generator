// function to generate markdown for README
function generateMarkdown(data) {
    return ` 
    # Your Project Title

    ${data.title}

    ## Description 

    ${data.description}

    ## Table of Contents

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
    ---

    ## Badges

    ${data.badges}
    ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

    Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.


    ## Contributing

    ${data.contributors}

    ## Tests

    ${data.tests}

    `;
  }
  
  module.exports = generateMarkdown;
  