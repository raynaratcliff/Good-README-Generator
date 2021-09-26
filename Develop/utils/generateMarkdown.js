// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ## Description:
  ${answers.description}
  ![screenshot](Develop/Assets/Good-README-generated.JPG)
  ## Table of Contents:
  * [1. Installation](#installation)
  * [2. Usage](#usage)
  * [3. License](#license)
  * [4. Contributing](#contributing)
  * [5. Testing](#tests)
  * [6. Questions](#questions)
  
  ### 1. Installation
  ${answers.installation}
  ### 2. Usage
  ${answers.usage}
  ### 3. License
  ${answers.license[0] || null}
  ### 4. Contributing
  ${answers.contributing}
  ### 5. Tests
  ${answers.tests}
  ### 6. Questions
  For additional questions please send an e-mail to ${answers.email} or visit to review files https://github.com/${answers.githubUsername}
`;
}

module.exports = generateMarkdown;