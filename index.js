// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const genMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
{    
  type: 'input',
  message: 'What do you want your README file to be named?',
  name : 'fileName'  
},
{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title' 
},
{
    type: 'list',
    message: 'What kind of license is your project using',
    name: 'license',
    choices: [
    {name:'Boost', value:"[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"}, 
    {name: 'Apache 2.0' ,value:"[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" },
    {name:'CC0' ,value:'[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'},
    {name:'GNU',value:'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'},
    {name:'ISC' ,value:'[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'},
    {name:'MIT' ,value:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'}
    ]
},
{
type : 'checkbox',
message: 'What was your project built with?',
name : 'made',
choices: [
    {name:'Python' , value:'[![made-with-python](https://img.shields.io/badge/Made%20with-Python-1f425f.svg)](https://www.python.org/)'},
    {name:'Go' , value:'[![made-with-Go](https://img.shields.io/badge/Made%20with-Go-1f425f.svg)](https://go.dev/)'},
    {name:'Rust' , value:'[![made-with-rust](https://img.shields.io/badge/Made%20with-Rust-1f425f.svg)](https://www.rust-lang.org/)'},
    {name:'Markdown', value:'[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)'},
    {name:'Javascript' , value:'[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)'}
]
},
{
    type: 'input',
    message: 'Describe your project in detail.',
    name: 'description' 
},
{
    type: 'input',
    message: 'Do you have any installation instructions that should be included in the Readme?',
    name: 'installation' 
},
{
    type: 'input',
    message: 'Usage information',
    name: 'usage' 
},
{
    type: 'input',
    message: 'Contribution guidelines',
    name: 'contributors' 
},
{
    type: 'input',
    message: 'test instructions.',
    name: 'test' 
},
{
    type: 'input',
    message: 'Please input your GitHub username.',
    name: 'github' 
},
{
    type: 'input',
    message: 'Please input your email.',
    name: 'email' 
}


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(response => {
        const md = genMarkdown(response)
        writeToFile(`${response.fileName}.md`, md)
    })

}

// Function call to initialize app
init();
