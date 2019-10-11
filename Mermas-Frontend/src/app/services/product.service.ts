import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Product} from '../models/product.model';
import {Observable} from 'rxjs';

@Injectable()
export class productService{
    constructor(private http: HttpClient){}
    private headers = new HttpHeaders().set('Content-Type','application/json');  
    public url:string = 'http://localhost:8000';

    getProducts(): Observable<any>{  
        return this.http.get(this.url+'/api/products/', {headers: this.headers})     
    }
}