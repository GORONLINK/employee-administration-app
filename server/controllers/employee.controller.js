const Employee = require('../models/employee.js');
const _ = require('underscore');

const employeeController = {};

employeeController.getEmpleados = async (req, res) => {
   const employees = await Employee.find();
   res.json(employees);
}

employeeController.getEmpleado = async (req, res) => {
   const employee = await Employee.findById(req.params.id);
   res.json(employee);
}

employeeController.createEmpleado = async (req, res) => {
    const employee = new Employee(req.body);
    await employee.save();
    res.json({
       'status': "Empleado guardado"
    });
}

employeeController.editEmpleado = async (req, res) => {
   const employee = new Employee(req.body);
   const data = _.pick(employee, ['name', 'position', 'office', 'salary']);
   await Employee.findByIdAndUpdate(req.params.id, data, {new: true});
   res.json({
      'status': "Empleado actualizado"
   }); 
}

employeeController.deleteEmpleado = async (req, res) => {
   await Employee.findByIdAndRemove(req.params.id);
   res.json({
      'status': "Empleado eliminado"
   })
}

module.exports = employeeController;