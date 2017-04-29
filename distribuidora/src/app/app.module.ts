import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ContentModule } from './content/content.module';
import { FabModule } from './fab/fab.module';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { SideBarModule } from './side-bar/side-bar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      SharedModule,
      ContentModule,
      FabModule,
      NavBarModule,
      SideBarModule,
      AgmCoreModule.forRoot({apiKey: 'AIzaSyBJHoiEGfmO9sVBI_3iJbNTW4Qc_dxdnyk', region:'BR',language:'pt-BR', libraries: ['places']})
  ],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
