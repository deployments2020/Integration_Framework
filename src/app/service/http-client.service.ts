import { User } from './../admin/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private HttpClient: HttpClient) { }

  getUsers() {

    return this.HttpClient.get<User[]>('http://localhost:8080/users/get');
        
  }

  addUser(newUser: User) {
    return this.HttpClient.post<User>('http://localhost:8080/users/add', newUser);
  }
}