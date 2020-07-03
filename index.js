function renderHtml(data) {
  const newReadMe =
   `${data.name}
  Description:
  Table of Contents:
      Installation 
      Usage
      License 
      Contributing 
      guidelines
      Tests
      Questions
  Installation: 
  Usage:
  License: 
  Contributing:
  guidelines:
  Tests:
  Questions:
      GitHub username
      email address
      contact instructions
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
      message: "Project title name:",
      name: "name",
  },
  // {
  //     type: "input",
  //     message: "What is your current location?",
  //     name: "location",
  // },
  // {
  //     type: "input",
  //     message: "Tell us about yourself.",
  //     name: "bio",
  // },
  // {
  //     type: "input",
  //     message: "What is your linkedin username?",
  //     name: "linkedin",
  // },
  // {
  //     type: "input",
  //     message: "What is your github username?",
  //     name: "github",
  // },
  // {
  //     type: "input",
  //     message: "what are your hobbies?",
  //     name: "hobbies",
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





