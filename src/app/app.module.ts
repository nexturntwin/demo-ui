import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/modules/material.module';
import { HomeComponent } from './feature/common/home/home.component';
import { SampleComponent } from './feature/common/sample/sample.component';
import { CustomModules } from './core/modules/custom.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CustomModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
