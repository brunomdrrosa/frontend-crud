import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Property } from './property.model';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  baseUrl = 'http://localhost:8080/properties';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  create(property: Property): Observable<Property> {
    return this.http.post<Property>(this.baseUrl, property).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

  read(): Observable<Property[]> {
    return this.http.get<Property[]>(this.baseUrl);
  }

  readById(id: number): Observable<Property> {
    return this.http.get<Property>(`${this.baseUrl}/${id}`);
  }

  update(property: Property): Observable<Property> {
    return this.http.put<Property>(`${this.baseUrl}/${property.id}`, property);
  }

  delete(id: number): Observable<Property> {
    return this.http.delete<Property>(`${this.baseUrl}/${id}`);
  }
}
