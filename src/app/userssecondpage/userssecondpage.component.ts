import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userssecondpage',
  templateUrl: './userssecondpage.component.html',
  styleUrls: ['./userssecondpage.component.css']
})
export class UserssecondpageComponent implements OnInit{
  constructor(private userService:UserDataService ,private route:Router){}
  data:any
  searchTerm:string=""
  ngOnInit(): void {
    this.userService.getUsersList(2).subscribe({
      next:(response)=>{
        this.data=response.data        
      }
    })
  }
  page1(){
    this.route.navigate(['/home'])
  }
  userDetails(id:any){
    this.route.navigate(['/userDetails'],{queryParams:{id:id}})
  }
}
