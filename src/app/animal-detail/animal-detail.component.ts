import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '../hero';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['../heroes/heroes.component.css']
})
export class AnimalDetailComponent implements OnInit {

  @Input() item3: Animal;

  constructor() { }

  ngOnInit() {
  }

}
