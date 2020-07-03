function renderHtml(data) {
  const newReadMe =
   `${data.projectName}

  Description:
  ${data.description}
  Table of Contents:
      Installation 
      Usage
      License 
      Contributing 
      guidelines
      Tests
      [Questions](#question)

      <!-- toc -->


  Installation: 
  ${data.installation}
  Usage:
  ${data.usage}
  License: 
  ${data.license}
  Contributing:
  ${data.contributing}
  Guidelines:
  ${data.guidelines}
  Tests:
  ${data.tests}

  ## Questions:
  ${data.github}
  ${data.linkedin}
  Contact Instructions:
  ${data.contactIns} 

  WHEN I choose a license for my application from a list of options (inquirer checkbox?)
  THEN a badge for that license is added near the top of the README and a
  notice is added to the section of the README entitled License that explains
  which license the application is covered under
  WHEN a link in Table of Contents is clicked
  THEN I am taken to the corresponding section of the README `
  return newReadMe;
}

var inquirer = require("inquirer");
var fs = require('fs');
inquirer.prompt([
  {
      type: "input",
      message: "Read me name:",
      name: "name",
  },
//   {
//       type: "input",
//       message: "Project Name/Title:",
//       name: "projectName",
//   },
//   {
//       type: "input",
//       message: "Project description:",
//       name: "description",
//   },
//   {
//     type: "input",
//     message: "Installation:",
//     name: "installation",
// },
// {
//   type: "input",
//   message: "Usage:",
//   name: "usage",
// },
// {
//   type: "checkbox",
//   message: "What licenses did the project use?",
//   name: "license",
//   choices: [
//     "licenseOne", 
//     "licenseTwo", 
//     "licenseThree", 
//     "licenseFour"
//   ]
// },
// {
//   type: "input",
//   message: "Contributing:",
//   name: "contributing",
// },
// {
//   type: "input",
//   message: "Guidelines:",
//   name: "guidelines",
// },
// {
//   type: "input",
//   message: "Tests:",
//   name: "tests",
// },
// {
//  type: "input",
//   message: "What is your linkedin url? ",
//   name: "linkedin",
// },
// {
//   type: "input",
//   message: "What is your github username url?",
//   name: "github",
// },
// {
//   type: "input",
//   message: "Contact Instructions?",
//   name: "contactIns",
// },

]).then(function(data) {
  const info = renderHtml(data)
  var filename = data.name.toLowerCase().split(' ').join('') + ".md";
  fs.writeFile(filename, info, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });
});





