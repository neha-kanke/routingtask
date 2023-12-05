import { Component, LOCALE_ID, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router, TitleStrategy } from '@angular/router';
import { Iuser } from 'src/app/models/users';
import { UserService } from 'src/app/services/user.service';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {
userform !:FormGroup
iseditmode :boolean= false
editid !:string
patchobj !:Iuser

private _router=inject(Router)
  constructor(private _uuidser:UuidService,
    private _userser:UserService,
    private _route:ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.creteuserform()
     this.patchvalueofuser()
  }
  creteuserform(){
    this.userform = new FormGroup({
      userName:new FormControl(null,[Validators.required]),
      userRole:new FormControl(null,Validators.required)
    })
  }
  onadduser(){
    if(this.userform.valid){
      let newobj={...this.userform.value,userid:this._uuidser.generateUUID()}
      this._userser.getnewobj(newobj)
      this.userform.reset();
      this._router.navigate(['users'])

    }
  }

  patchvalueofuser(){
    this._route.params
    .subscribe((params:Params)=>{
      this.editid=params['user-id']
      // console.log(this.editid);
      if(this.editid){
        this.iseditmode=true
      this.patchobj=this._userser.getsingleuser(this.editid)
      console.log(this.patchobj);
      this.userform.patchValue(this.patchobj) 
      }
    })
  }
  onupdate(){
    let updatevalue={...this.userform.value,userId:this.editid}
    this._userser.updateuser(updatevalue)
    this._router.navigate(['users'])
  }

}
