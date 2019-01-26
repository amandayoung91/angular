import { Component, OnInit } from '@angular/core';
import { Animal } from '../hero';
import { ANIMALS } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  animals = ANIMALS;
  selectedVar: Animal;
  onSelect(item: Animal): void {
    this.selectedVar = item;
  }

  constructor() { }

  ngOnInit() {
  }

}
