import { Routes, Router, ActivatedRoute } from '@angular/router';
import { HttpClientService } from './../../service/http-client.service';
import { User } from './../user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<User>;
  selectedUser: User;
  action: string;

  constructor(private HttpClientService: HttpClientService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.HttpClientService.getUsers().subscribe(

      response => this.handleSuccessfulResponse(response),
    );
    
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action']
      }
    );

  }
  handleSuccessfulResponse(response) {
    this.users = response;
  }

  addUser() {
    this.selectedUser = new User();
    this.router.navigate(['admin', 'users'], { queryParams: { action: 'add' } });
  }

}
