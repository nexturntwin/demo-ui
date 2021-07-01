import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../core/modules/material.module';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    declarations: [],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ]
})

export class SharedModule { }