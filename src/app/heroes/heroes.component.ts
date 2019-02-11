import { Component, OnInit } from '@angular/core';
import { Animal } from '../hero';
// import { ANIMALS } from '../mock-heroes';
import { AnimalService } from '../animal.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // animals = ANIMALS;
  animals: Animal[];
  selectedVar: Animal;
  onSelect(item: Animal): void {
    this.selectedVar = item;
  }

  // getAnimals2(): void {
  //   this.animals = this.animalService.getAnimals();
  // }

  getAnimals2(): void {
    this.animalService.getAnimals()
      .subscribe(animals => this.animals = animals);
  }

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.getAnimals2();
  }

}
