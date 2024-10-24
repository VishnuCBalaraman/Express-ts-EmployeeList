import { Router } from 'express';
import { getAllEmployees,postEmployee,updateEmployee,deleteEmployee, getAEmployee} from '../controllers/empController';

const router = Router();

// Route to get all Employees
router.get('/employees', getAllEmployees);

router.post('/employees', postEmployee);

router.get('/employees/:id', getAEmployee);

router.put('/employees/:id', updateEmployee);

router.delete('/employees/:id', deleteEmployee);

export default router;