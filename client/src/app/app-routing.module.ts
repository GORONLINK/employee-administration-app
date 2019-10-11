import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployersListComponent } from './components/employers-list/employers-list.component';
import { EmployersFormComponent } from './components/employers-form/employers-form.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/employees',
    pathMatch: 'full'
  },
  {
    path: 'employees',
    component: EmployersListComponent
  },
  {
    path: 'employees/add',
    component: EmployersFormComponent
  },
  {
    path: 'employees/edit/:id',
    component: EmployersFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
