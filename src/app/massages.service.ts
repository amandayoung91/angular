import { Injectable } from '@angular/core';
import {metaFromI18nMessage} from '@angular/compiler/src/render3/view/i18n/util';

@Injectable({
  providedIn: 'root'
})
export class MassagesService {

  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  constructor() { }
}
