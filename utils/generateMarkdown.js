// returns a license badge based on which license is passed. if there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![License](https://img.shields.io/badge/license-${license}-brightgreen)`
  }
  return "";
}

// returns the license link. if there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `- [License](#license)`
  }
  return "";
}

// returns the license section of README. if there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License 
    This application is licensed under: ${license}.`
  }
  return "";
}


// generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.summary}

  Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  ${renderLicenseLink(data.license)}
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.contributions}
  
  ${renderLicenseSection(data.license)}
  
  ## Tests
  ${data.test}

  ## Questions
  Have questions or comments about this application?
  - Please feel free to email me at: ${data.contact}
  - Or find me on GitHub at: [${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;