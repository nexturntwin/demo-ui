import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/common/home/home.component';
import { SampleComponent } from './feature/common/sample/sample.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import {CameraComponent} from "./modules/camera/camera.component";

const routes: Routes = [
  //TODO: Create seprate route modules class for each UI.
  { path: '', component: LayoutComponent, children:
    [
      { path: 'dashboard', component: HomeComponent },
      { path: 'product', component: CameraComponent },
      { path: 'application', component: HomeComponent },
      { path: 'pipeline', component: HomeComponent },
      { path: 'report', component: HomeComponent },
      { path: 'usergroup', component: HomeComponent },
      { path: 'about', component: HomeComponent },
      { path: 'sample', component: SampleComponent },
      { path: 'capture', component: CameraComponent }
    ]
  },
  { path: 'sample', component: LayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
