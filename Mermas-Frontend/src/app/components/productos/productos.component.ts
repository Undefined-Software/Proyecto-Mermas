import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product.model';
import {productService} from '../../services/product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  public products: Array<Product>; 

  constructor(
    private productService: productService,
    private http: HttpClient,
  ) {
    this.products = [];
   }

  ngOnInit() {
  }

  getProductos(){
    this.productService.getProducts().subscribe(
      response => {
        this.products = response;
        console.log(this.products);
      },
      error => {
          console.log(error);
      }
    );  
  }

}
