import pool from '../db/db';
import { Request, Response } from 'express';
import * as constants from '../utility/constants';

// Class Based Controller
class DeptController {
    async createDept (req: Request, res: Response) {
        try {
            const newDept = await pool.query(constants.DEPT_INSERT_QUERY, [req.body.deptName]);
            res.send(newDept.rows[0]);
        } catch (error) {   
            res.status(400).json({ error });
        }
    }

    async searchDept (req: Request, res: Response) {
        try {
            const query = constants.DEPT_SELECTION_QUERY;
            let searchQuery = '';

            if (req.query.searchBy) {

                const searchFilter = req.query.searchBy.toString().split(':');
                searchQuery = ` WHERE ${searchFilter[0]} ${searchFilter[1]} ${searchFilter[2]}`;
            }

            const depts = await pool.query(query + searchQuery);
    
            res.send(depts.rows);
        } catch (error) {
            res.status(400).json({ error });
        }
    }

    async deleteDept (req: Request, res: Response) {
        try {
            await pool.query(constants.DEPT_DELETION_QUERY, [req.params.id]);
    
            res.send('Department DELETED');
        } catch (error) {
            res.status(400).json({ error });
        }
    }
}

export default DeptController;