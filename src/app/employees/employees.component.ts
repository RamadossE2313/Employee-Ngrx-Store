import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { Store } from '@ngrx/store';
import { addEmployee, loadAllEmployee, removeAllEmployee, removeEmployee } from '../../ngrx-store/employee-store/employee.actions';
import { EmployeeStateInterface } from '../models/employee.state';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent implements OnInit{
  employees: Employee[] = [];

  constructor(private store: Store<{employees: any}>){
    store.select("employees").subscribe((response: EmployeeStateInterface) =>{
      this.employees = response.employees;
      console.log(this.employees);
    })
  }

  ngOnInit(): void {
   this.loadAllEmployees();
  }

  loadAllEmployees()
  {
    let employees = [
      new Employee(1, 'test', 1500,'male'),
      new Employee(2, 'test1', 1500,'male'),
      new Employee(3, 'test2', 1500,'male'),
      new Employee(4, 'test3', 1500,'male')
    ] as any;

    this.store.dispatch(loadAllEmployee({employees}));
  }

  addEmployee() {
    const lastEmployee = this.employees.length ? this.employees[this.employees.length - 1] : null;
    const newId = lastEmployee ? lastEmployee.id + 1 : 1;
    const employee = new Employee(newId, 'onclick', 1500, 'male');
    this.store.dispatch(addEmployee({ employee }));
  }

  removeEmployee() {
    let employeeId: number = 1;
    this.store.dispatch(removeEmployee({employeeId}));
  }
  clearEmployees() {
    this.store.dispatch(removeAllEmployee());
  }
}
