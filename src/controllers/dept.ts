import pool from '../db/db';
import { Request, Response} from 'express';

const deptController = {
    createDept: async (req: Request, res: Response) => {
        try {
            const newDept = await pool.query('INSERT INTO dept(dept_name) VALUES($1) RETURNING *', [req.body.deptName]);

            res.send(newDept.rows[0]);
        } catch (error) {   
            res.status(400).json({ error });
        }
    },

    getAllDept: async (req: Request, res: Response) => {
        try {
            const depts = await pool.query('SELECT * FROM dept');
    
            res.send(depts.rows);
        } catch (error) {
            res.status(400).json({ error });
        }
    },
    
    getDept: async (req: Request, res: Response) => {
        try {
            const depts = await pool.query('SELECT * FROM dept where dept_id = $1', [req.params.id]);
    
            res.send(depts.rows);
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    deleteDept: async (req: Request, res: Response) => {
        try {
            await pool.query('DELETE FROM dept WHERE dept_id = $1', [req.params.id]);
    
            res.send('Department DELETED');
        } catch (error) {
            res.status(400).json({ error });
        }
    }
};

export default deptController;