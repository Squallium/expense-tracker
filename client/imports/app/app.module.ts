import { NgModule, ErrorHandler } from '@angular/core';
import { MyApp } from './app.component';
import {BrowserModule} from "@angular/platform-browser";
import {Form, FormsModule} from "@angular/forms";

import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {TodosListCtrl} from "../../../imports/components/todosList/todosList";
import {HeroesComponent} from "../../../imports/components/heroes/heroes.component";
import {HeroDetailComponent} from "../../../imports/components/hero-detail/hero-detail.component";
import {MessagesComponent} from "../../../imports/components/messages/messages.component";

@NgModule({
    declarations: [
        MyApp,
        TodosListCtrl,
        HeroesComponent,
        HeroDetailComponent,
        MessagesComponent
    ],
    imports: [
        NgxDatatableModule,
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [MyApp]
})
export class AppModule {}