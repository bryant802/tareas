import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaswebComponent } from './paginasweb/paginasweb.component';
import { AcercadeComponent } from './acercade/acercade.component';
import {ArticulosComponent} from './articulos/articulos.component';
import {DireccionComponent} from './direccion/direccion.component';

const routes: Routes = [
  {
    path:'paginasweb',component:PaginaswebComponent
  },
  {
    path:'acercade',component:AcercadeComponent
  },
  {
    path:'articulos',component:ArticulosComponent
  },
  {
    path:'direccion',component:DireccionComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
