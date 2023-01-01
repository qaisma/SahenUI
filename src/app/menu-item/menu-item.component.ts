import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../models/menu-item.model';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  menuItem: MenuItem;

  constructor(
    private _route: ActivatedRoute,
    private _menuService: MenuService) {
    // this.menuItem = ;
  }

  ngOnInit(): void {
    const routeParams = this._route.snapshot.paramMap;
    const menuItemId = routeParams.get('id') || '';

    this.menuItem = this._menuService.getMenuItem(menuItemId);
  }

}