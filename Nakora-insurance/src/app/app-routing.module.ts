import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dashboard/dashboard.component';
import { UsersModule } from './users/users.module';

const routes: Routes = [
  {
    path:"login",
    // component: DashBoardComponent,
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path:"dashboard",
    // component: DashBoardComponent,
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  { 
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
