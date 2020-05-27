import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { PaginaswebComponent } from './paginasweb/paginasweb.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { DireccionComponent } from './direccion/direccion.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    PaginaswebComponent,
    AcercadeComponent,
    ArticulosComponent,
    DireccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
