import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

const materialModules = [
  MatButtonModule,
  MatDividerModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule
]

@NgModule({
  imports: [materialModules],
  exports: [materialModules]
})

//To keep track of all the required Material Modules required.
export class MaterialModule { }