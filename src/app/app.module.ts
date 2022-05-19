import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardsComponent } from './paises/cards/cards.component';
import { PaisesService } from './services/paises.service';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { ContainerComponent } from './paises/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    NavbarComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [
    PaisesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
