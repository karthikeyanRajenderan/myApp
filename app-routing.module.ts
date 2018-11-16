import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { CreateUserComponent } from '../app/create-user/create-user.component';
import { UserListComponent } from '../app/user-list/user-list.component';
import {UserdetailsComponent} from'../app/userdetails/userdetails.component';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', component: UserListComponent },
  { path: 'add', component: CreateUserComponent },
  { path: 'update', component: UserdetailsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
