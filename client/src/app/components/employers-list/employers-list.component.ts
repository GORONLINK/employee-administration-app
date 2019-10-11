import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employers-list',
  templateUrl: './employers-list.component.html',
  styleUrls: ['./employers-list.component.css']
})
export class EmployersListComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeesService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      employees =>{
        this.employees = employees as Employee[];
      },
      error =>{
        console.error(error);
      }
    )
  }

  deleteEmployees(id: string) {
    this.employeeService.deleteEmployee(id).subscribe(
      employee =>{
        this.getEmployees();
        console.log(employee);
      },
      error => {
        console.error(error);
      }
    )
  }

}
