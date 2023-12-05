import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
proid !:string;
proobj !: Iproduct
  constructor(private _route:ActivatedRoute,
    private _producserv:ProductsService) { }

  ngOnInit(): void {
    this.proid=this._route.snapshot.params['pro-id']
    // console.log(this.proid);
    this.proobj=this._producserv.getsinglepro(this.proid)

    
  }

}
