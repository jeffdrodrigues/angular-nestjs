import { environment } from './../../../environments/environment';
import { Profile } from './profile';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profiles: Profile[] = [];


  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Profile[]>('http://localhost:3000/profiles');
  }
}
