import { NgModule } from "@angular/core"
import { CustomModules } from "./modules/custom.module"
import { MaterialModule } from "./modules/material.module"

const coreModules = [
    CustomModules,
    MaterialModule
]

@NgModule({
    imports: [coreModules],
    exports: [coreModules]
})

export class CoreModules {}