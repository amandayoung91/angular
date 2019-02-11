import { Component, OnInit } from '@angular/core';
import { MassagesService } from '../massages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public massagesService: MassagesService) { }

  ngOnInit() {
  }

}
