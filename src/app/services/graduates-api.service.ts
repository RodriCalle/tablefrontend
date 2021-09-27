import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Graduation} from "../models/graduation";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GraduatesApiService {
  //Main endpoint
  basePath = 'http://itana.herokuapp.com/api/graduation'
  basePathData = 'http://data.gov.sg/api/action/datastore_search?resource_id=eb8b932c-503c-41e7-b513-114cffbe2338'

  constructor(private http: HttpClient) { }

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

  handleError(e: HttpErrorResponse): Observable<never> {
    if (e.error instanceof ErrorEvent) {
      console.log('An error occurred: ', e.error.message);
    }
    else {
      console.log(`Backend returned code ${e.status}, body was: ${e.error}`);
    }
    return throwError('Something happened with request, please try again later.');
  }

  //Using each endpoint of the API deployed

  addGraduation(item: any): Observable<Graduation>{
    return this.http.post<Graduation>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getGraduationById(id: number): Observable<Graduation> {
    return this.http.get<Graduation>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateGraduation(id: number, item: Graduation): Observable<Graduation>{
    return this.http.put<Graduation>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  deleteGraduation(id: number): Observable<any> {
    return this.http.delete<Graduation>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getAllGraduations(): Observable<Graduation[]>{
    return this.http.get<Graduation[]>(this.basePath)
      .pipe(retry(2), catchError(this.handleError));
  }

  getData() {
    return this.http.get(this.basePathData);
  }
}
