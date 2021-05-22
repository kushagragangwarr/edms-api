import express from 'express';
const empRouter = express.Router();
import empController from '../controllers/emp';

// create an employee
empRouter.post('/', empController.createEmployee);

// get all employees
empRouter.get('/', empController.getAllEmployees);

// get an employee
empRouter.get('/:id', empController.getEmployee);

// update an employee
empRouter.put('/:id', empController.updateEmployee);

// delete an employee
empRouter.delete('/:id', empController.deleteEmployee);

export default empRouter;