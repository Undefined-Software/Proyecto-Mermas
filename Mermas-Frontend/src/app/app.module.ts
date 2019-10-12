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
import { 
  MatToolbarModule, 
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule,
  MatCardModule,
  MatDialogModule } from '@angular/material';

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
    MatDialogModule
  ],
  providers: [
    productService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
