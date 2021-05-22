import express from 'express';
import DeptController from '../controllers/dept';
const deptRouter = express.Router();
const deptController = new DeptController();

// Creating a department
deptRouter.post('/', deptController.createDept);

// Search department BASED ON ANY FIELD AND ALSO SORT THEM ACCORDINGLY (according to user preference)
deptRouter.get('/', deptController.searchDept);

/* ******* update a department : If taking a real life scenerio, it's not possible to change the Department name, so this route is useless. 
deptRouter.put('/:id', deptController.updateDepartment);
******** */

// delete a department
deptRouter.delete('/:id', deptController.deleteDept);

export default deptRouter;