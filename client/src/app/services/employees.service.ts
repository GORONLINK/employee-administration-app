import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Employee } from '../models/employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(`${this.URI}/employees`);
  }

  getEmployee(id: string) {
    return this.http.get(`${this.URI}/employees/${id}`);
  }

  addEmployee(employee: Employee) {
    return this.http.post(`${this.URI}/employees`, employee);
  }

  updateEmployee(id: string, employee: Employee) {
    return this.http.put(`${this.URI}/employees/${id}`, employee);
  }

  deleteEmployee(id: string) {
    return this.http.delete(`${this.URI}/employees/${id}`);
  }
}
