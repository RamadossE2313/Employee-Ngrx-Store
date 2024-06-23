import { createReducer, on } from "@ngrx/store";
import * as EmployeeActions from "./employee.actions";
import { EmployeeStateInterface } from "../../app/models/employee.state";

export const initialState:  EmployeeStateInterface = {
    employees: []
}

export const employeeReducer = createReducer
    (initialState,
        on( EmployeeActions.addEmployee, (state: EmployeeStateInterface, {employee})=> 
        ({...state,
            employees: [...state.employees, employee]
        })),

        on( EmployeeActions.loadAllEmployee, (state: EmployeeStateInterface, {employees})=> 
        ({...state,
            employees: employees
        })),

        on( EmployeeActions.removeEmployee, (state: EmployeeStateInterface, {employeeId})=> 
        ({...state,
            employees: state.employees.filter(x => x.id !== employeeId)
        })),

        on( EmployeeActions.removeAllEmployee, (state: EmployeeStateInterface )=> 
        ({...state,
            employees: initialState.employees
        })),
    );