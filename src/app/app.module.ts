import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { ProductsComponent } from './component/products/products.component';
import { UsersComponent } from './component/users/users.component';
import { ProductComponent } from './component/products/product/product.component';
import { ProFormComponent } from './component/products/pro-form/pro-form.component';
import { Approutingmodule } from './app-routing.module';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { AboutsComponent } from './component/abouts/abouts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './component/users/user/user.component';
import { UserformComponent } from './component/users/userform/userform.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    ProductComponent,
    ProFormComponent,
    PagenotfoundComponent,
    AboutsComponent,
    UserComponent,
    UserformComponent
  ],
  imports: [
    BrowserModule,
    Approutingmodule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
