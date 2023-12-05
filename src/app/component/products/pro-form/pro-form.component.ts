import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproduct } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-pro-form',
  templateUrl: './pro-form.component.html',
  styleUrls: ['./pro-form.component.scss']
})
export class ProFormComponent implements OnInit {
  productform !: FormGroup
  iseditmode: boolean = false;
  editid !: string
  patchobj !: Iproduct
  constructor(private _uuidservices: UuidService,
    private _productser: ProductsService,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.creteproductform()
    this.patchformpro()
  }
  creteproductform() {
    this.productform = new FormGroup({
      pName: new FormControl(null, [Validators.required]),
      pStatus: new FormControl(null, [Validators.required])
    })
  }
  onaddproduct() {
    if (this.productform.valid) {
      let newobj = { ...this.productform.value, pId: this._uuidservices.generateUUID() }
      // console.log((newobj));
      this._productser.getnewobj(newobj)
      this.productform.reset()
    }
  }
  patchformpro() {
    this._route.params
      .subscribe((params: Params) => {
        console.log(params);
        this.editid = params['pro-id']
        console.log(this.editid);
        if (this.editid) {
          this.iseditmode = true
          this.patchobj = this._productser.getsinglepro(this.editid)
          console.log(this.patchobj);
          this.productform.patchValue(this.patchobj)
        }
      })
  }



  onupdate(){
    let  updatevalue={...this.productform.value,pId:this._uuidservices.generateUUID}
    console.log(updatevalue);
    this._productser.updateproduct(updatevalue)
  }

}
