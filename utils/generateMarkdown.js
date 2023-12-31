// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n' [License](#license)\n`;
 }
 return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license !== "none") {
  return `## License

   Licensed under the ${license} license.`
}
return "";
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
## Description:
  ${data.description}
## Deployed Application URL:
  ${data.link}
## Table of Contents
* [Installation](#installation)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)
  ## License
  ${renderLicenseLink(data.license)}
  ## Installation
  ${data.installation}
  ## How to Use This Application:
  ${data.usage}
  ## Contributors
  ${data.contributors}
  ## Tests
  ${data.tests}
  ## Questions
  Need to reach out? [Click Here](mailto:JoshysHERE@gmail.com?subject=JoshysHERE'sReadme) To Send Me An Email!
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
