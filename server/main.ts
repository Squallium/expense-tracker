import {Meteor} from 'meteor/meteor';
import '../imports/api/tasks'
import {Sequelize} from "sequelize-typescript";
import {PayerSummary} from "../imports/api/payer-summary";
import * as moment from "moment"
import * as _ from "underscore"
import {Posts} from "../imports/collections";


Meteor.startup(() => {
    // code to run on server at startup

    var dummyPosts = [
        {
            title: 'My First entry',
            slug: 'my-first-entry',
            description: 'Lorem ipsum dolor sit amet.',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            timeCreated: moment().subtract(7, 'days').unix(),
            author: 'John Doe'
        },
        {
            title: 'My Second entry',
            slug: 'my-second-entry',
            description: 'Borem ipsum dolor sit amet, consetetur sadipscing.',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            timeCreated: moment().subtract(5, 'days').unix(),
            author: 'John Doe'
        },
        {
            title: 'My Third entry',
            slug: 'my-third-entry',
            description: 'Dorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            timeCreated: moment().subtract(3, 'days').unix(),
            author: 'John Doe'
        },
        {
            title: 'My Fourth entry',
            slug: 'my-fourth-entry',
            description: 'Sorem ipsum dolor sit amet, consetetur sadipscing.',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            timeCreated: moment().subtract(2, 'days').unix(),
            author: 'John Doe'
        },
        {
            title: 'My Fifth entry',
            slug: 'my-fifth-entry',
            description: 'Korem ipsum dolor sit amet, consetetur sadipscing elitr.',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            timeCreated: moment().subtract(1, 'days').unix(),
            author: 'John Doe'
        }
    ];

    // we add the dummyPosts to our database
    _.each(dummyPosts, function (post) {
        Posts.insert(post);
    });

});



Meteor.methods({
    jander: function () {

        console.log("cipote");
        var sequela = new Sequelize({

        });
        sequela.addModels([PayerSummary]);

        var promisedResult = PayerSummary.findOne()
            .then(payer => {
                // console.log(payer);
                return payer.dataValues;
            }).catch(error1 => {
                console.log(error1);
            });

        return promisedResult;
    },
});
