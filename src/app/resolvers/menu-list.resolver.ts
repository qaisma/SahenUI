import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Menu } from "../models/menu.model";
import { MenuService } from "../services/menu.service";

@Injectable({ providedIn: 'root' })
export class MenuListResolver implements Resolve<Menu> {
  constructor(private _menuService: MenuService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    // const sessionId = localStorage.sessionId;
    // this.service.fillRestaurant(sessionId);
  }
}