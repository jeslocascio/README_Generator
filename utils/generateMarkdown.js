

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => { 
  switch (license) {
    case "MIT License":
      return "![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)";
      break;
    case "BSD 3-Clause License":
      return "![BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
      break;
    case "GPLv3 License":
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      break; 
    case "Apache 2.0":
      return "![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
      break; 
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => { 
  switch (license) {
    case "MIT License":
      return "https://opensource.org/licenses/MIT";
      break;
    case "BSD 3-Clause License":
      return "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "GPLv3 License":
      return "https://www.gnu.org/licenses/gpl-3.0";
      break; 
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
      break; 
    default:
      return "";
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
 ## License
 ${renderLicenseBadge(data.license)}
  This project is licensed under the terms of the **[${
    data.license
  }](${renderLicenseLink(data.license)})**
  
  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  If you have any questions or suggestions about this project, please feel free to contact me:
- GitHub: [@${data.github}](http://github.com/${data.github})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
