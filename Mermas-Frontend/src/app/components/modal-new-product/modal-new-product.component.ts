import { Component, OnInit } from '@angular/core';
import {productService} from '../../services/product.service';
import {Product} from '../../models/product.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-modal-new-product',
  templateUrl: './modal-new-product.component.html',
  styleUrls: ['./modal-new-product.component.css']
})
export class ModalNewProductComponent implements OnInit {
  public product: Product;
  constructor(
    private productoService: productService,
    private http: HttpClient
  ){
    this.product = new Product('',0,0,0,'');
   }

  ngOnInit() {
  }

}
