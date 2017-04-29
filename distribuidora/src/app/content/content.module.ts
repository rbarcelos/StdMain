import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotasComponent } from './rotas/rotas.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule
  ],
  declarations: [RotasComponent],
    exports: [RotasComponent]
})
export class ContentModule { }
