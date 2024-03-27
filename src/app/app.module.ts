import { NgModule } from "@angular/core"; 
import { BrowserModule } from "@angular/platform-browser"; 

import { AppComponent } from "./app.component";

import { FormsModule, ReactiveFormsModule, Validators, FormControl   } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app.routes";
import { CommonModule, NgIf } from "@angular/common";


@NgModule({
    declarations: [
        AppComponent,
        FormControl
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        CommonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }