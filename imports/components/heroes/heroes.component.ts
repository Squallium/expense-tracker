import {Component, OnInit} from "@angular/core";
import {Hero} from "../../api/hero";
import {HeroService} from "../../services/hero.service";

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService) {

    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
        // Meteor.call('jander', (error, result) => {
        //     if (!error) {
        //         console.log(result);
        //     } else {
        //         console.log(error);
        //     }
        // });
    }

    getHeroes(): void {
        this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
    }
}
