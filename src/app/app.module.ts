import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaComponent} from './lista/lista.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { HistoricoComponent } from './historico/historico.component';
import { HistoricoService } from './historico/historico.component.service';
@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    FormularioComponent,
    HistoricoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HistoricoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
