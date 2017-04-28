import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotasComponent } from './rotas/rotas.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBJHoiEGfmO9sVBI_3iJbNTW4Qc_dxdnyk', region:'BR', language:'pt-BR'})
  ],
  declarations: [RotasComponent],
    exports: [RotasComponent]
})
export class ContentModule { }
