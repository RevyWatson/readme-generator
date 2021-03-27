// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// generates markdown for README
function generateMarkdown(data) {
  //The below link doesn't work. it produced the license name and a broken image icon. When loaded to the brower it loads to a 404
  // ![${data.license}]('https://img.shields.io/github/license/:${data.username}/:${data.repo}?color=bright%20green&style=plastic')
  return `


  # ${data.title}
  
  ## Description
  ${data.summary}

  Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.contributions}
  
  ## License
  ${data.license}
  
  ## Tests
  ${data.test}

  ## Questions
  Have questions or comments about this application?
  - Please feel free to email me at: ${data.contact}
  - Or find me on GitHub at: [${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;