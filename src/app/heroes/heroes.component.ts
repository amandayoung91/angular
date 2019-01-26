import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedVar: Hero;
  onSelect(item: Hero): void {
    this.selectedVar = item;
  }

  constructor() { }

  ngOnInit() {
  }

}
