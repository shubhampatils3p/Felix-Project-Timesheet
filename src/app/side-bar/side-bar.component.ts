import { Component, OnInit } from '@angular/core';

import { AuthService } from  '../auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  title = 'Timesheet';
  constructor(private  authService:  AuthService) { }

  ngOnInit() {
  }

}
