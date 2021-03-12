import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GnbaseComponent } from './gnbase/gnbase.component';
import { GnexponenteComponent } from './gnexponente/gnexponente.component';
import { GnresultadoComponent } from './gnresultado/gnresultado.component';
import { GnacumuladorComponent } from './gnacumulador/gnacumulador.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GnbaseComponent,
    GnexponenteComponent,
    GnresultadoComponent,
    GnacumuladorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
