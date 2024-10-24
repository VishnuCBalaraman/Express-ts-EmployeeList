import { Router } from 'express';
import { getAllEmployees,postEmployee, updateEmployee} from '../controllers/empController';

const router = Router();

// Route to get all Employees
router.get('/employees', getAllEmployees);

router.post('/employees', postEmployee);

router.put('/employees/:id', updateEmployee);





export default router;