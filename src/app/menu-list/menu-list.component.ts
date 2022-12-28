import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../models/menu.model';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  restaurantId: string = 'cdabbce6-e332-4267-8e48-5a9f9d421290';
  menus: Array<Menu> = [];
  menuIndex: number = 0;

  constructor(
    private _route: ActivatedRoute,
    private _menuService: MenuService) { }


  ngOnInit(): void {
    if (this.restaurantId == undefined || this.restaurantId == null) {
      alert('no restaurant was provided!');
      return;
    }
    this._getReatuarantMenus();
  }

  private _getReatuarantMenus() {
    this._menuService.getMenusByRestuarantId(this.restaurantId).subscribe(menus => {
      this.menus = menus.filter(m=>m.menuItems&& m.menuItems.length>0);
    });
  }

  setStep(index: number) {
    this.menuIndex = index;
  }

}
