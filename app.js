const inquirer = require("inquirer");
const db = require("./db/connection");

// Get all departments data
const displayDepartments = () => {
    db.query(`SELECT * FROM departments`, (err, rows) => {
        console.table(rows)
        promptUser();
    });
};

// Get all roles data
const displayRoles = () => {
    db.query(`SELECT * FROM roles`, (err, rows) => {
        console.table(rows)
        promptUser();
    });
};

// Get all department data
const displayEmployees = () => {
    db.query(`SELECT * FROM employees`, (err, rows) => {
        console.table(rows)
        promptUser();
    });
};

const displayEmployeesUpdate = () => {
    db.query(`SELECT * FROM employees`, (err, rows) => {
        console.table(rows)
    });
};

// Generate new department data
const addDepartment = () => {
   return inquirer.prompt ([
       {
           type: "input",
           name: "departmentName",
           message: "What is the department you want to add?"
       }
   ]) // turn this into db query/insert etc
    .then(answers => {
            const sql = `INSERT INTO departments (departments)
                VALUES (?)`;
            const params = [answers.departmentNameInput]; // **NOT SURE ANYTHING FOLLOWING HERE IS ACCURATE**

            db.query(sql, params, (err, results) => {
                if(err) {
                    console.log(err);
                    return;
                } else {
                    console.table(rows) 
                }
            })
            .then(promptUser())

        // promptUser()
    })
};

// Generate new roles data
const addRole = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "roleName",
            message: "What is the role you want to add?"
        },
        {
            type: "input",
            name: "roleSalary",
            message: "What is the role's salary?"
        },
        {
            type: "input",
            name: "roleDepartment",
            message: "What department does the new role belong to?"
        }
    ]) // turn this into db query/insert etc
        // .then(answers)
};


const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "employeeFirstName",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "employeeLastName",
            message: "What is the employee's last name?"
        },
        {
            type: "input",
            name: "employeeRole",
            message: "What is the employee's role?"
        },
    ])// turn this into db query/insert etc
        // .then(answers)
};

const updateEmployee = () => {
    displayEmployeesUpdate()

    .then(inquirer.prompt([
            {
                type: "input",
                name: "chooseId",
                message: "Which employee would you like to update?"
            }
        ])// turn this into db query/insert etc
        // .then(answers)
)};

    

const promptUser = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "selection",
            message: "What do you want to do?",
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Quit"]
        },
    ]).then(({ selection }) => {
        
        if (selection === "View all departments") {
            displayDepartments()
        } else if (selection === "View all roles") {
            displayRoles()
        } else if (selection === "View all employees") {
            displayEmployees()
        } else if (selection === "Add a department") {
            addDepartment()
        } else if (selection === "Add a role") {
            addRole()
        } else if (selection === "Add an employee") {
            addEmployee()
        } else if (selection === "Update an employee role") {
            updateEmployee()
        } else if (selection === "Quit") {
            process.exit();
        }
    }).catch(err => {
        console.log(err);
    });
};

promptUser();
