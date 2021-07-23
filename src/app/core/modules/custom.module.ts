import { NgModule } from "@angular/core"
import { AuthModule } from "../../auth/auth.module"

const customModules = [
    AuthModule
]

@NgModule({
    imports: [customModules],
    exports: [customModules]
})

export class CustomModules {}