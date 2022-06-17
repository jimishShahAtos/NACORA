import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { BannerNavBarComponent } from './banner-nav-bar/banner-nav-bar.component';



@NgModule({
  declarations: [
    UsersComponent,
    BannerNavBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UsersComponent
  ]
})
export class UsersModule { }
