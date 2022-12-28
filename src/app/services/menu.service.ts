import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { catchError, Observable, of, tap } from "rxjs";
import { Menu } from "../models/menu.model";
import { MessageService } from "./message.service";

@Injectable({ providedIn: 'root' })
export class MenuService {

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
        return this.http.get<Menu[]>(this._baseUrl + this._menusUrl + '/GetByRestaurantId/' + restaurantId)
            .pipe(
                tap(_ => this.log('fetched restaurant menus')),
                catchError(this.handleError<Menu[]>('getMenusByRestuarantId', []))
            );
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