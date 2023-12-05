import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/models/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  userarr:Array<Iuser>=[]
  constructor(private _userservi:UserService) { }

  ngOnInit(): void {
    this.userarr=this._userservi.getalluser()
  }

}
