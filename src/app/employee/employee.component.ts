import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public user = [];
  usersArray = [];
  constructor(
    private userservice:UserService,
    private router: Router
  ) { }

  title = "Employees";
  ngOnInit( ) {
    // this.userservice.getUser().subscribe(res => {
    //     this.usersArray = res;
    //   });
    this.userservice.getUser().on('value',snapshot => {
      snapshot.forEach(data => {
        this.usersArray.push(data.val());
      })

    })
  }

  viewProfile(){
    this.router.navigate(['/profile']);
    
  }
}
