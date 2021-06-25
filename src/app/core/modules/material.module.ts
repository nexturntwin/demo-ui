import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

const materialModules = [
  MatButtonModule,
  MatDividerModule
]

@NgModule({
  imports: [materialModules],
  exports: [materialModules]
})

//To keep track of all the required Material Modules required.
export class MaterialModule { }