const fs = require('fs');
const inquirer = require('inquirer');

// Prompt the user for information
inquirer.prompt([
  {
    type: 'input',
    name: 'appName',
    message: 'What is the name of your app?'
  },
  {
    type: 'input',
    name: 'appDescription',
    message: 'Provide a short description of your app:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How should users use your app?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How can users install your app?'
  },
  {
    type: 'input',
    name: 'reportingIssues',
    message: 'How should users report issues?'
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'How can users contribute to your project?'
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'What license did you use?',
    choices: ['MIT', 'APACHE2.0', 'Boost1.0', 'MPL2.0', 'BDS2', 'BDS3', 'None'] 
  },
  {
    type: 'input',
    name: 'credit',
    message: 'Who all are involved with building this project?'
  },
  {
    type: 'input',
    name: 'features',
    message: 'List your features if any'
  },

]).then(answers => {
  // Create README content
  const readmeContent = `
  # ${answers.appName}

  ## Description
  
 ${answers.appDescription}
  
  ## Installation
  
  ${answers.installation}

  ## Usage
  
  ${answers.usage}
  
  ## Credits
  
  ${answers.credit}
  
  ## License
  
  ${answers.license}
  ---
  
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Badges
  
  ![Static Badge](https://img.shields.io/badge/license-${answers.license}-blue.svg)

  
  Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
  ## Features
  
  ${answers.features}
  
  ## How to Contribute
  
  ${answers.contributions}
`;

  // Write content to README.md
  fs.writeFileSync('README.md', readmeContent);

  console.log('README.md created successfully!');
}).catch(error => console.error(error));
