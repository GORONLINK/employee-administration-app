import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { Employee } from '../../models/employee';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-employers-form',
  templateUrl: './employers-form.component.html',
  styleUrls: ['./employers-form.component.css']
})
export class EmployersFormComponent implements OnInit {

  employee: Employee = {
    _id: '0',
    name: '',
    position: '',
    office: '',
    salary: 0
  }

  edit: boolean = false;

  constructor(private employeesService: EmployeesService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if(params.id) {
      this.employeesService.getEmployee(params.id).subscribe(
        employee => {
          console.log("EDITANDO");
          this.employee = employee as Employee;
          this.edit = true;
        },
        error => {
          console.error(error);
        }
      )
    }
  }

  addEmployee() {
    delete this.employee._id;
    this.employeesService.addEmployee(this.employee).subscribe(
      res => {
        console.log(this.employee);
        this.router.navigate(['/employees']);
      },
      error => {
        console.error(error);
      }
    )
  }

  editEmployee() {
    this.employeesService.updateEmployee(this.employee._id, this.employee).subscribe(
      res => {
        console.log(this.employee);
        this.router.navigate(['/employees']);
      },
      error => {
        console.error(error);
      }
    )
  }

}
