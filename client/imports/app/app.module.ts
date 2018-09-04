import { NgModule, ErrorHandler } from '@angular/core';
import { MyApp } from './app.component';
import {BrowserModule} from "@angular/platform-browser";

import {NgxDatatableModule} from "@swimlane/ngx-datatable";

@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        NgxDatatableModule,
        BrowserModule
    ],
    providers: [],
    bootstrap: [MyApp]
})
export class AppModule {}