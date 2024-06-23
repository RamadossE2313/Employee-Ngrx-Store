import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EmployeesComponent } from './employees/employees.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { employeeReducer } from '../ngrx-store/employee-store/employee.reducers';
import { userProfileReducers } from '../ngrx-store/user-profile-store/user.profile.reducers';
import { EffectsModule } from '@ngrx/effects';
import { UserProfileEffects } from '../ngrx-store/user-profile-store/user.profile.effects';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({employees: employeeReducer, userProfiles: userProfileReducers}),
    EffectsModule.forRoot([UserProfileEffects])
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
