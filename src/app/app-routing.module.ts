import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListHomeComponent } from './user-list-home/user-list-home.component';
import { UserssecondpageComponent } from './userssecondpage/userssecondpage.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path:"home",component:UserListHomeComponent},
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:"users",component:UserssecondpageComponent},
  {path:"userDetails",component:UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
