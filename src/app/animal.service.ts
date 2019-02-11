import { Injectable } from '@angular/core';
import { Animal } from './hero';
import { ANIMALS } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MassagesService } from './massages.service';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  // getAnimals(): Animal[] {
  //   return ANIMALS;
  // }

  getAnimals(): Observable<Animal[]> {
    this.massagesService.add('Все идет по плану');
    return of(ANIMALS);
  }

  constructor(private massagesService: MassagesService) { }
}
