

INSERT INTO departments (departments)
VALUES
    ("Executive"),
    ("Legal"),
    ("Sales"),
    ("Human Resources (HR)"),
    ("Operations");

INSERT INTO roles (title, salary, department_id)
VALUES
    ("President", "250000.00", 1),
    ("Lawyer", "150000.00", 2),
    ("Account Director", "100000.00", 3),
    ("Resource Officer", "80000.00", 4),
    ("Operator", "70000.00", 5);

INSERT INTO employees (first_name, last_name, roles_id)
VALUES
    ("Julius", "Caesar", 1),
    ("Marc", "Anthony", 2),
    ("Titus", "Pullo", 3),
    ("Gaius", "Octavian", 4),
    ("Marcus", "Brutus", 5);