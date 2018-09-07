import { NgModule, ErrorHandler } from '@angular/core';
import { MyApp } from './app.component';
import {BrowserModule} from "@angular/platform-browser";

import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {TodosListCtrl} from "../../../imports/components/todosList/todosList";

@NgModule({
    declarations: [
        MyApp,
        TodosListCtrl
    ],
    imports: [
        NgxDatatableModule,
        BrowserModule
    ],
    providers: [],
    bootstrap: [MyApp, TodosListCtrl]
})
export class AppModule {}