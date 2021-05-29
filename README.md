# edms-api
An API created using **NodeJS** and **PostgreSQL** for maintaining Employee-Department database, where ADMIN can Create, Search, Update and Delete an employee and a department and each employee is part of a department.

# Schemas
## Schema of Employee
emp_id : BIGSERIAL \
emp_name : VARCHAR(22) \
emp_salary : NUMBER \
dept_id : REFERENCES dept(dept_id)

## Schema of Department
dept_id : BIGSERIAL \
dept_name : VARCHAR(22)

# Prerequisites
## Installation
- NodeJS

  > https://nodejs.org/en/
- Postgres

  > **Windows**: https://www.postgresql.org/

  > **Linux**: sudo apt install postgresql

## Configuration
- Postgres
  #### Windows Users
  - No configuration required
  #### Linux Users
  - Start sql server
  
    > sudo -u postgres psql postgres
  - Change the password, to what you have set in the db.ts file
  
    > \password postgres

# Starting the SQL server
You don't necessarily need to start the SQL server in order to use it in the API. But if you want to access the SQL shell, then

- Windows

  > psql -U postgres
- Linux

  > psql -U postgres -h localhost

# Usage
- Install all dependencies

  > npm install
- Start the server

  > npm start
- To see API documentation, visit

  > localhost:3000/api-docs
