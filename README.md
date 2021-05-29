# edms-api-temp
An API created using **NodeJS** and **PostgreSQL** for maintaining Employee-Department database, where ADMIN can Create, Search, Update and Delete an employee and a department and each employee is part of a department.

# Schemas
### Schema of Employee
emp_id : BIGSERIAL \
emp_name : VARCHAR(22) \
emp_salary : NUMBER \
dept_id : REFERENCES dept(dept_id)

### Schema of Department
dept_id : BIGSERIAL \
dept_name : VARCHAR(22)

# Usage
- Install all dependencies
> npm install
- Start the server
> npm start
- To see API documentation, visit
> localhost:3000/api-docs
