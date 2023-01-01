import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuListComponent } from './menu-list/menu-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/menu-list', pathMatch: 'full' },
  { path: 'menu-list', component: MenuListComponent },
  { path: 'menu-item/:id', component: MenuItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
