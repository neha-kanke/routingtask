import { Injectable } from '@angular/core';
import { Iuser } from '../models/users';
import { users } from '../consts/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userarra:Array<Iuser>=users
  constructor() { }

  getalluser(){
    return this.userarra
  }

getsingleuser(id:string):Iuser{
return this.userarra.find(use=> use.userId===id)!
}
getnewobj(newuser:Iuser){
  this.userarra.push(newuser)
}
updateuser(userobj:Iuser){
    let find=this.userarra.findIndex(user=>user.userId === userobj.userId);
      this.userarra[find].userName=userobj.userName
      this.userarra[find].userRole=userobj.userRole
      
}

  
}
