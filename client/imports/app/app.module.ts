import { NgModule, ErrorHandler } from '@angular/core';
import { MyApp } from './app.component';
import {BrowserModule} from "@angular/platform-browser";
import {Form, FormsModule} from "@angular/forms";

import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {TodosListCtrl} from "../../../imports/components/todosList/todosList";
import {HeroesComponent} from "../../../imports/components/heroes/heroes.component";

@NgModule({
    declarations: [
        MyApp,
        TodosListCtrl,
        HeroesComponent
    ],
    imports: [
        NgxDatatableModule,
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [MyApp, TodosListCtrl]
})
export class AppModule {}