import { Component, OnInit, Input } from '@angular/core';
import { Animal } from './hero';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css']
})
export class AnimalDetailComponent implements OnInit {

  @Input() item2: Animal;

  constructor() { }

  ngOnInit() {
  }

}
