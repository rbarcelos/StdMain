import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotasComponent } from './rotas/rotas.component';
import { AgmCoreModule } from '@agm/core';
import { MapaComponent } from './mapa/mapa.component';
import { InfoWindowContentComponent } from './mapa/info-window-content/info-window-content.component';
import { MomentModule } from 'angular2-moment';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule
  ],
  declarations: [RotasComponent, MapaComponent, InfoWindowContentComponent],
    exports: [RotasComponent]
})
export class ContentModule { }
