import { ProfileService } from './../shared/profile.service';
import { Component, OnInit } from '@angular/core';
import { Profile } from '../shared/profile';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  profiles: Profile[] = [];
  constructor(private profileService: ProfileService) { }

  ngOnInit(){
    this.profileService.getAll().subscribe(profiles => {
      this.profiles = profiles;
    });
  }

}
