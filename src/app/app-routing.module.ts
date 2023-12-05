import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./component/home/home.component";
import { UsersComponent } from "./component/users/users.component";
import { ProductsComponent } from "./component/products/products.component";
import { PagenotfoundComponent } from "./component/pagenotfound/pagenotfound.component";
import { AboutsComponent } from "./component/abouts/abouts.component";
import { ProductComponent } from "./component/products/product/product.component";
import { ProFormComponent } from "./component/products/pro-form/pro-form.component";
import { UserComponent } from "./component/users/user/user.component";
import { UserformComponent } from "./component/users/userform/userform.component";



const Approute: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'users', 
        component: UsersComponent,
        children:[
        
        {
            path: 'add-form', component: UserformComponent
        },
    
        {
            path: ":user-id", component: UserComponent
        },
        {
            path: ":user-id/edit-form", component: UserformComponent
        },
        ]
    },
   
    {
        path: 'products', 
        component: ProductsComponent,
        children:[
       
        {
            path: 'add-form', component: ProFormComponent
        },
        {
            path: 'products/:pro-id', component: ProductComponent
        },
        {
            path: 'products/:pro-id/edit-form', component: ProFormComponent
        },

        ]

    },
    
    {
        path: 'abouts', component: AboutsComponent
    },
]



@NgModule({
    imports: [RouterModule.forRoot(Approute)],
    exports: [RouterModule]
})



export class Approutingmodule { }