import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { catchError, Observable, of, tap } from "rxjs";
import { Menu } from "../models/menu.model";
import { MessageService } from "./message.service";
import { sampleData } from "./sample_data";
import { MenuItem } from "../models/menu-item.model";

@Injectable({ providedIn: 'root' })
export class MenuService {

    getMenuItem(menuItemId: string): MenuItem {
        for (let i = 0; i < sampleData.length; i++) {
            const menu = sampleData[i];
            for (let j = 0; j < menu.menuItems.length; j++) {
                const menuItem = menu.menuItems[j];
                if (menuItem.id == menuItemId) {
                    return menuItem;
                }
            }
        }
        return null as any;
    }

    private _menusUrl = '/Menus';
    private _baseUrl = environment.apiUrl;

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };


    constructor(
        private http: HttpClient,
        private messageService: MessageService) {
    }

    getMenusByRestuarantId(restaurantId: string): Observable<Menu[]> {
        return of(sampleData);
        // // uncomment for production
        // return this.http.get<Menu[]>(this._baseUrl + this._menusUrl + '/GetByRestaurantId/' + restaurantId)
        //     .pipe(
        //         tap(_ => this.log('fetched restaurant menus')),
        //         catchError(this.handleError<Menu[]>('getMenusByRestuarantId', []))
        //     );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    private log(message: string) {
        this.messageService.add(`MenuService: ${message}`);
    }
}