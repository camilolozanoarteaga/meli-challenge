import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, forkJoin, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrganizeProduct } from '@core-model/organize-product';
import { Product } from '@core-model/product.model';
import { ProductListModel } from '@core-model/product-list.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    responseType: 'text' as 'json',
  };


  getProductsList(query: string): Observable<ProductListModel> {
    return this.http.get<any>(`${environment.api}/sites/MLA/search?q=${query}&limit=4`, this.httpOptions).pipe(
      map((data: any) => this.parseJson(data.toString())),
      map((response: any) => {
        const organizeProduct = new OrganizeProduct(null, null, response);
        return organizeProduct.organizeList();
      }),
      catchError(this.handleError)
    );
  }

  getProduct(id: string): Observable<Product> {
    return forkJoin({
      productById: this.getProductById(id),
      descriptionById: this.getProductDescriptionById(id)
    }).pipe(
      map((request) => {
        const organizeProduct = new OrganizeProduct(request.productById, request.descriptionById, null);
        return organizeProduct.organize();
      })
    );
  }

  getProductById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.api}/items/${id}`, this.httpOptions).pipe(
      map((data: any) => this.parseJson(data.toString())),
      catchError(this.handleError)
    );
  }

  getProductDescriptionById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.api}/items/${id}/description`, this.httpOptions).pipe(
      map((data: any) => this.parseJson(data.toString())),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }

  private parseJson(data: string): any {
    const jsonData = data || '';
    return JSON.parse(jsonData);
  }
}
