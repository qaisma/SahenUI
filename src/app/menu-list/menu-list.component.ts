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
  allMenus: Array<Menu> = [];
  filteredMenus: Array<Menu> = [];
  menuIndex: number = 0;

  searchFilter = ""

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
      this.allMenus = menus.filter(m => m.menuItems && m.menuItems.length > 0);
      this.resetFilter();
    });
  }

  resetFilter() {
    this.searchFilter = '';
    this.filteredMenus = this._clone(this.allMenus);
  }

  setStep(index: number) {
    this.menuIndex = index;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (!filterValue || filterValue == '') {
      this.resetFilter();
      return;
    }
    this.filteredMenus = this._clone(this.allMenus);
    this.filteredMenus.filter(m =>
      m.menuItems.some(mi =>
        mi.name.toLowerCase().includes(filterValue.trim().toLowerCase())
        ||
        mi.description.toLowerCase().includes(filterValue.trim().toLowerCase())
      )
    );

    this.filteredMenus.forEach(m =>
      m.menuItems = m.menuItems.filter(mi =>
        mi.isEnabled =
        mi.name.toLowerCase().includes(filterValue.trim().toLowerCase())
        ||
        mi.description.toLowerCase().includes(filterValue.trim().toLowerCase())
      )
    );
  }

  private _clone(original: Array<any>): Array<any> {
    const clonedArray: Array<any> = [];
    original.forEach(val => clonedArray.push(Object.assign({}, val)));
    return clonedArray;
  }
}
