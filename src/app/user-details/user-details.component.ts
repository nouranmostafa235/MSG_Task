import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
constructor(private service:UserDataService,private route:ActivatedRoute){}
userId:any
userData:any
isloading:boolean=false
ngOnInit(): void {
  this.isloading=true
  this.route.queryParams.subscribe(params => {
    this.userId = params['id'];
  });
  this.service.getUserById(this.userId).subscribe({
    next:(response)=>{
      this.userData=response.data   
      this.isloading=false 
    }
  })
}

}
