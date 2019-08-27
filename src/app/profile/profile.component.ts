import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  title = "Profile";
  profile : Profile[];
  constructor(
    private profileService: ProfileService,
    private router: Router
  ) { }

  ngOnInit() {
    this.profileService.getProfile();
   }

}
