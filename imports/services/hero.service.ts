import {Injectable} from "@angular/core";

import {Hero} from "../api/hero";
import {HEROES} from "../api/mock-heroes";

@Injectable({
    providedIn: 'root',
})
export class HeroService {

    constructor() {

    }

    getHeroes(): Hero[] {
        return HEROES;
    }
}