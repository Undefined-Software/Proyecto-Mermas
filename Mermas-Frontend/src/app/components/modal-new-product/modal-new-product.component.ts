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
  imageUrl: string = "../../assets/img/noImage.png";
  image:File = null;

  constructor(
    private productoService: productService,
    private http: HttpClient
  ){
    this.product = new Product('',0,0,0,null);
   }

  ngOnInit() {
  }
  
  selectImage(file: FileList){
    this.image = file.item(0);
    console.log(this.image);
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.image);
  }
  
  addProducto(){
    this.productoService.addProducto(this.product).then(
      () => console.log("error"),
    );
  }
}
