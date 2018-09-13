import {Component} from "@angular/core";
import {MeteorObservable} from "meteor-rxjs";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class MyApp {
    title = 'Tour of Heroes';
    rows = []
    columns = []


    constructor() {

        // this.rows = [
        //     { user_id: 'Austin', install_time: 'Male', country: 'Swimlane', media_source: 'Swimlane' },
        //     { user_id: 'Dany', install_time: 'Male', country: 'KFC', media_source: 'Swimlane' },
        //     { user_id: 'Molly', install_time: 'Female', country: 'Burger King', media_source: 'Swimlane' },
        // ];
        this.columns = [
            { prop: 'user_id' },
            { prop: 'install_time' },
            { name: 'country' },
            { prop: 'media_source' }
        ];

        Meteor.call('jander', (error, result) => {
            if (!error) {
                console.log(result);
                this.rows = this.rows.concat(result)
                console.log(this.rows)
            } else {
                console.log(error);
            }
        });

        console.log("asdfasdfasdfasdfañ ñasdjfañlsdjfañsfjkañsdjf")
        console.log(this.rows)

        // MeteorObservable.call("highlight", "lcoooo").subscribe((response) => {
        //     // Handle success and response from server!
        //     console.log(response);
        // }, (err) => {
        //     // Handle error
        // });
    }
}