import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
      SideBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
