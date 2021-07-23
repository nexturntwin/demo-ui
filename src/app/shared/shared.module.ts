import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../core/modules/material.module';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule, Routes } from "@angular/router";
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MaterialModule
    ],
    declarations: [
        LayoutComponent,
        ThemeSwitchComponent
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MaterialModule
    ]
})

export class SharedModule { }