import { Injectable } from '@angular/core';

export class LogService {

  constructor() { }

  addMessage(message: string) {
    console.log(message);
  }
}
