import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Product} from '../models/product.model';
import {Observable} from 'rxjs';

@Injectable()
export class productService{
    constructor(private http: HttpClient){}
    private headers = new HttpHeaders().set('Content-Type','application/json');  
    public url:string = 'http://localhost:8000/api/products/';

    getProducts(): Observable<any>{  
        return this.http.get(this.url+'list', {headers: this.headers})     
    }

    addProducto(product: Product):Promise<any>{
     return this.http
     .post(this.url+'list', JSON.stringify(product), {headers:this.headers})
     .toPromise().then();
    }

    deleteProduct(productCode):Observable<any>{
        return this.http.delete(this.url + productCode, {headers: this.headers});
    }
}
