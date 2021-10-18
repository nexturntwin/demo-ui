import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './feature/common/home/home.component';
import { SampleComponent } from './feature/common/sample/sample.component';
import { SharedModule } from './shared/shared.module';
import { CoreModules } from './core/core.module';
import { CameraComponent } from './modules/camera/camera.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SampleComponent,
    CameraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
