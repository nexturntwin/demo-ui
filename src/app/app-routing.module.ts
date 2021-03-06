import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/common/home/home.component';
import { SampleComponent } from './feature/common/sample/sample.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'sample', component: SampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
