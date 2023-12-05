import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Iuser } from 'src/app/models/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userid !:string
userobj !:Iuser
  
  constructor(private _route:ActivatedRoute,
    private _userservi:UserService) { }

  ngOnInit(): void {

    this.userid=this._route.snapshot.params['user-id']
    console.log(this.userid);
    this.userobj=this._userservi.getsingleuser(this.userid)
  }

}
