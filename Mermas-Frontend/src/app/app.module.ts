import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductosComponent } from './components/productos/productos.component';
import { MermasComponent } from './components/mermas/mermas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalNewProductComponent } from './components/modal-new-product/modal-new-product.component';
import { LayoutModule } from '@angular/cdk/layout';
import {FormsModule} from '@angular/forms';
import { 
  MatToolbarModule, 
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule, } from '@angular/material';

//Services
import {productService} from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    MermasComponent,
    NavbarComponent,
    ModalNewProductComponent
  ],
  entryComponents:[
    ModalNewProductComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    productService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
