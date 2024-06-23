import {createAction, props} from '@ngrx/store'
import { Employee } from '../../app/models/employee';

// props is nothing but payload or parameter for the actions
export const loadAllEmployee = createAction('[app] Loadd All Employees', props<{employees: Employee[]}>());
export const addEmployee = createAction('[app] Add Employee', props<{employee: Employee}>());
export const removeEmployee = createAction('[app] Remove Employee', props<{employeeId: number}>());
export const removeAllEmployee = createAction('[app] Remove All Employees');
