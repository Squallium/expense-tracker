import {Component} from "@angular/core";

import {Tasks} from "../../api/tasks";

@Component({
    selector: 'todos-list',
    templateUrl: './todosList.html',
    styleUrls: ['./todosList.scss']
})
export class TodosListCtrl {

    tasks:Object[]

    constructor() {
        this.tasks = [{
            text: 'This is task 1'
        }, {
            text: 'This is task 2'
        }, {
            text: 'This is task 3'
        }];
    }
}