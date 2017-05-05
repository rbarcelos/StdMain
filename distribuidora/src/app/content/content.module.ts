import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './content.routes';


import { RotasComponent } from './rotas/rotas.component';
import { AgmCoreModule } from '@agm/core';
import { MapaComponent } from './mapa/mapa.component';
import { InfoWindowContentComponent } from './mapa/info-window-content/info-window-content.component';
import { MomentModule } from 'angular2-moment';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule,
    MomentModule,
    RouterModule.forChild(MODULE_ROUTES)
  ],
  declarations: [RotasComponent, MapaComponent, InfoWindowContentComponent, MODULE_COMPONENTS ],
  exports: [RotasComponent]
})
export class ContentModule { }
