
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.fileName}
  ## License and built with
${data.license ? data.license : ''} ${data.made ? data.made : ''}
## The Title of the application
${data.title}

## Description
 ${data.description}

 ## Installation Instructions
 ${data.installation}

 ## Usage
 ${data.usage}

 ## Contribution
 ${data.contributors}

 ## Tests
 ${data.test}

## Questions
If you have any questions you can reach out to me at ${data.github}
or at ${data.email}.
`;
}

module.exports = generateMarkdown;
