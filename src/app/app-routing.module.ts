import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuListComponent } from './menu-list/menu-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/menu-list', pathMatch: 'full' },
  { path: 'menu-list', component: MenuListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
