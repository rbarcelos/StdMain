import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotasComponent } from './rotas/rotas.component';
import { AgmCoreModule } from '@agm/core';
import { MapaComponent } from './mapa/mapa.component';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule
  ],
  declarations: [RotasComponent, MapaComponent],
    exports: [RotasComponent]
})
export class ContentModule { }
