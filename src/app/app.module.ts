import { NgModule } from "@angular/core"; 
import { BrowserModule } from "@angular/platform-browser"; 

import { AppComponent } from "./app.component";

import { FormsModule, ReactiveFormsModule, formControl, Validators   } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
    declarations: [
        AppComponent,
        Validators,
        formControl
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }