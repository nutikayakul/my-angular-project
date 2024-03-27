import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NgIf } from '@angular/common';


const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}