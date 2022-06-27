import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { HeaderLoginComponent } from '../users/header-login/header-login.component';
import { FiltersComponent } from './filters/filters.component';
@NgModule({
  declarations: [
    DashBoardComponent,
    HeaderComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashBoardComponent
  ]
})
export class DashboardModule { }
