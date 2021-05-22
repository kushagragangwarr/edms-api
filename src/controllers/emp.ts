import { Request, Response } from 'express';
import pool from '../db/db';
import * as constants from '../utility/constants';

// Class Based Controller
class EmpController {
    async createEmployee (req: Request, res: Response) {
        try {
            const { name, salary, dept } = req.body;
            const newEmployee = await pool.query(constants.EMP_INSERT_QUERY, [name, salary, dept]);
    
            res.send(newEmployee.rows[0]);
        } catch (error) {
            res.status(400).json({ error });
        }
    }

    async searchEmployee (req: Request, res: Response) {
        try {
            const query = constants.EMP_SELECTION_QUERY;
            let searchQuery = '';
            let sortQuery = '';

            if (req.query.searchBy) {

                const searchFilter = req.query.searchBy.toString().split(':');
                searchQuery = ` WHERE ${searchFilter[0]} ${searchFilter[1]} ${searchFilter[2]}`;
            }

            if (req.query.sortBy) {
                sortQuery = ` ORDER BY ${req.query.sortBy}`;
            }

            const employees = await pool.query(query + searchQuery + sortQuery);
    
            res.send(employees.rows);
        } catch (error) {
            res.status(400).json({ error });
        }
    }

    async updateEmployee (req: Request, res: Response) {
        try {
            const { changes, updateBy } = req.body;
            const query = constants.EMP_UPDATION_QUERY;
            let changeQuery = '';

            for (let change in changes) {
                changeQuery += ' ' + change + ' = ' + changes[change] + ',';
            }

            changeQuery = changeQuery.substring(0, changeQuery.length - 1);

            await pool.query(query + changeQuery + 'WHERE emp_id = $1', [updateBy.emp_id]);
    
            res.send('Employee Updated');
        } catch (error) {
            res.status(400).json({ error });
        }
    }

    async deleteEmployee (req: Request, res: Response) {
        try {
            await pool.query(constants.EMP_DELETION_QUERY, [req.params.id]);
    
            res.send('Employee DELETED');
        } catch (error) {
            res.status(400).json({ error });
        }
    }
}

export default EmpController;