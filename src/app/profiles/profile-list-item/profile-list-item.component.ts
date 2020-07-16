import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../shared/profile';

@Component({
  selector: 'app-profile-list-item',
  templateUrl: './profile-list-item.component.html',
  styleUrls: ['./profile-list-item.component.css']
})
export class ProfileListItemComponent implements OnInit {
  @Input()
  profile: Profile;

  constructor() { }

  ngOnInit(): void {
  }

}
