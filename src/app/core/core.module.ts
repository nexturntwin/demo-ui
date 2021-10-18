import { NgModule } from "@angular/core"
import { CustomModules } from "./modules/custom.module"
import { MaterialModule } from "./modules/material.module"
import { WebcamModule } from 'ngx-webcam';

const coreModules = [
    CustomModules,
    MaterialModule,
    WebcamModule
]

@NgModule({
    imports: [coreModules],
    exports: [coreModules]
})

export class CoreModules {}