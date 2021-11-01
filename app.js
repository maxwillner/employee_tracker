const inquirer = require("inquirer");
const db = require("./db/connection");

// Get all departments data
const displayDepartments = () => {
    db.query(`SELECT * FROM departments`, (err, rows) => {
        console.table(rows)
    });
};

// Get all roles data
const displayRoles = () => {
    db.query(`SELECT * FROM roles`, (err, rows) => {
        console.table(rows)
    });
};

// Get all department data
const displayEmployees = () => {
    db.query(`SELECT * FROM employees`, (err, rows) => {
        console.table(rows)
    });
};

// Generate new department data
// const addDepartment = () => {
//    return inquirer.prompt ([
//        {
//            type: input,
//            name: "departmentName",
//            message: "What is the department you want to add?"
//        }
//    ])
// };

const promptUser = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "selection",
            message: "What do you want to do?",
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
        },
    ]).then(answer => {
        
        if (answer = "View all departments") {
            displayDepartments()
        } else if (answer = "View all roles") {
            displayRoles()
        } else if (answer = "View all employees") {
            displayEmployees()
        }
    }).catch(err => {
        console.log(err);
    });
};

promptUser();
