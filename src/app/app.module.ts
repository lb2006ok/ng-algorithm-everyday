import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LSWRCComponent } from './algorithm/lswrc/lswrc.component';
import { CwmwComponent } from './algorithm/cwmw/cwmw.component';
import { DetailComponent } from './Rxjs/detail/detail.component';
import { BSTComponent } from './algorithm/bst/bst.component';

@NgModule({
  declarations: [
    AppComponent,
    LSWRCComponent,
    CwmwComponent,
    DetailComponent,
    BSTComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
