const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee.controller');

router.get('/', employeeController.getEmpleados);
router.post('/', employeeController.createEmpleado);
router.get('/:id', employeeController.getEmpleado);
router.put('/:id', employeeController.editEmpleado);
router.delete('/:id', employeeController.deleteEmpleado);

module.exports = router;