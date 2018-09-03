import { NgModule, ErrorHandler } from '@angular/core';
import { MyApp } from './app.component';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [MyApp]
})
export class AppModule {}