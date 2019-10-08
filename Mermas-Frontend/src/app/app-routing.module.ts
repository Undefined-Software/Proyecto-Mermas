import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MermasComponent } from './components/mermas/mermas.component';

const routes: Routes = [
  {
    path: '', component: NavbarComponent,
    children: [
      {path: 'productos', component: ProductosComponent},
      {path: 'mermas', component: MermasComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
