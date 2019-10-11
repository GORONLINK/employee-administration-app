import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmployersListComponent } from './components/employers-list/employers-list.component';
import { EmployersFormComponent } from './components/employers-form/employers-form.component';
import { EmployeesService } from './services/employees.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployersListComponent,
    EmployersFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    EmployeesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
