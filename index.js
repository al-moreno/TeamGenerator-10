
const inquirer = require("inquirer");

async function addEmployee() {
  return inquirer.prompt([
    {
      type: "list",
      message: "who else would you like to add to the team?",
      name: "engineerOrIntern",
      choices: ["Engineer", "Intern", "Exit"],
    },
  ]);
}
async function managerPrompt() {inquirer.prompt([
    {
      type: "input",
      message: "What is the manager's name?",
      name: "manager_name",
    },
    {
      type: "input",
      message: "What is the manager's employee id number?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the managers email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the managers's office number?",
      name: "officeNumber",
    },
  ]);
}
async function engineerPrompt() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the engineer's name?",
      name: "engineer_name",
    },
    {
      type: "input",
      message: "What is the engineer's id number?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the engineer's email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the engineer's GITHUB username?",
      name: "github",
    },
  ]);
}
async function internPrompt() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the intern's name?",
      name: "intern_name",
    },
    {
      type: "input",
      message: "What is the intern's ID number?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the intern's email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What school did the intern attend?",
      name: "school",
    },
  ]);
}

module.exports = {
  addEmployee,
  managerPrompt,
  engineerPrompt,
  internPrompt,
};
