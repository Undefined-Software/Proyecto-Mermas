import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product.model';
import {productService} from '../../services/product.service';
import { HttpClient } from '@angular/common/http';
import {MatDialog} from '@angular/material';
import { ModalNewProductComponent } from '../modal-new-product/modal-new-product.component';


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
    public dialog: MatDialog,
  ) {
    this.products = [];
   }

  ngOnInit() {
    this.getProductos();
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

  deleteProduct(product: Product){
    this.productService.deleteProduct(product.code).subscribe(
      response => {
        console.log("se borra producto: " +response);
        this.products = this.products.filter(prod => prod !== product);
      },
      error => {
        console.log("error: "+ error);
      }
    );
  }

  modalNewProduct(){
    this.dialog.open(ModalNewProductComponent,{
      width: '600px',});
      this.getProductos();
  }

  

}
