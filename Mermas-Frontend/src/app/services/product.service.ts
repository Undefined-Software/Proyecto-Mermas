import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';

@Injectable()
export class productoService{
    constructor(private http: HttpClient){}
    private headers = new HttpHeaders().set('Content-Type','application/json');  
    public url:string = 'http://localhost:8000';
}