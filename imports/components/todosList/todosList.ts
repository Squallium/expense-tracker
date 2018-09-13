import {Component} from "@angular/core";

import {Tasks} from "../../api/tasks";
import {Posts} from "../../collections";
import {Mongo} from "meteor/mongo";

@Component({
    selector: 'todos-list',
    templateUrl: './todosList.html',
    styleUrls: ['./todosList.scss']
})
export class TodosListCtrl {

    tasks:Object

    constructor() {
        this.tasks = Posts.find({}, {sort: {timeCreated: -1}});
    }
}