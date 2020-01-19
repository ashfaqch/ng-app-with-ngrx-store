import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Order } from './order';


@Injectable({ providedIn: 'root' })
export class OrderService {
    private url = 'api/orders';
    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    private httpOptions = { headers: this.httpHeaders };

    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<Order[]> {
        return this.httpClient.get<Order[]>(this.url)
            .pipe(
                catchError(this.handleError)
            );
    }

    add(order: Order): Observable<Order> {
        return this.httpClient.post<Order>(this.url, order, this.httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    getWithId(id: number): Observable<Order> {
        const url = `${this.url}/${id}`;
        return this.httpClient.get<Order>(url)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(err) {
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return throwError(errorMessage);
    }

}
