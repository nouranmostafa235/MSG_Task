import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-user-list-home',
  templateUrl: './user-list-home.component.html',
  styleUrls: ['./user-list-home.component.css']
})
export class UserListHomeComponent implements OnInit{
constructor(private userService:UserDataService ,private route:Router){}
isloading:boolean=false
data:any
searchTerm:string=""
ngOnInit(): void {
  this.isloading=true
  this.userService.getUsersList(1).subscribe({
    next:(response)=>{
      this.data=response.data
      this.isloading=false
    }
  })
}
page2(pagenum:any){
  this.route.navigate(['/users'],{queryParams:{page:pagenum}})
}
userDetails(id:any){
  this.route.navigate(['/userDetails'],{queryParams:{id:id}})
}
}
