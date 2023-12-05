import { Injectable } from '@angular/core';
import { Iproduct } from '../models/products';
import { productsArray } from '../consts/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
proarray :Array<Iproduct>=productsArray
  constructor() { }


  getallproduct(){
    return this.proarray
  }
  getsinglepro(id:string):Iproduct{
   return  this.proarray.find(pro=>{
      return pro.pId===id
        
    })!
    }
    getnewobj(product:Iproduct){
      this.proarray.push(product)
  }
  updateproduct(prodcut:Iproduct){
 this.proarray.push(prodcut)
  }
}

