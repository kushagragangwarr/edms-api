import pool from '../db/db';
import { Request, Response} from 'express';

// Class Based Controller
class DeptController {
    async createDept (req: Request, res: Response) {
        try {
            const newDept = await pool.query('INSERT INTO dept(dept_name) VALUES($1) RETURNING *', [req.body.deptName]);

            res.send(newDept.rows[0]);
        } catch (error) {   
            res.status(400).json({ error });
        }
    }

    async searchDept (req: Request, res: Response) {
        try {
            const query = 'SELECT * FROM dept';
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
            await pool.query('DELETE FROM dept WHERE dept_id = $1', [req.params.id]);
    
            res.send('Department DELETED');
        } catch (error) {
            res.status(400).json({ error });
        }
    }
}

export default DeptController;