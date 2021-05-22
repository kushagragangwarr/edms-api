import { Request, Response } from 'express';
import pool from '../db/db';

class EmpController {
    async createEmployee (req: Request, res: Response) {
        try {
            const { name, salary, dept } = req.body;
            const newEmployee = await pool.query('INSERT INTO employee (emp_name, emp_salary, dept_id) VALUES ($1, $2, $3) RETURNING *', [name, salary, dept]);
    
            res.send(newEmployee.rows[0]);
        } catch (error) {
            res.status(400).json({ error });
        }
    }

    async getAllEmployees (req: Request, res: Response) {
        try {
            const employees = await pool.query('SELECT * FROM employee');
    
            res.send(employees.rows);
        } catch (error) {
            res.status(400).json({ error });
        }
    }

    async getEmployee (req: Request, res: Response) {
        try {
            const employees = await pool.query('SELECT * FROM employee where emp_id = $1', [req.params.id]);
    
            res.send(employees.rows);
        } catch (error) {
            res.status(400).json({ error });
        }
    }

    async updateEmployee (req: Request, res: Response) {
        try {
            const { name, salary } = req.body;
            await pool.query('UPDATE employee SET emp_name = $1, emp_salary = $2 WHERE emp_id = $3', [name, salary, req.params.id]);
    
            res.send('Employee Updated');
        } catch (error) {
            res.status(400).json({ error });
        }
    }

    async deleteEmployee (req: Request, res: Response) {
        try {
            await pool.query('DELETE FROM employee WHERE emp_id = $1', [req.params.id]);
    
            res.send('Employee DELETED');
        } catch (error) {
            res.status(400).json({ error });
        }
    }
}

export default EmpController;