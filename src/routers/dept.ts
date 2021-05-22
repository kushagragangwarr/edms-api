import express from 'express';
import deptController from '../controllers/dept';
const deptRouter = express.Router();

// Creating a department
deptRouter.post('/', deptController.createDept);

// Get all departments
deptRouter.get('/', deptController.getAllDept);

// get an employee
deptRouter.get('/:id', deptController.getDept);

/* ******* update an employee : If taking a real life scenerio, it's not possible to change the Department name, so this route is useless. 
deptRouter.put('/:id', deptController.updateEmployee);
******** */

// delete an employee
deptRouter.delete('/:id', deptController.deleteDept);

export default deptRouter;