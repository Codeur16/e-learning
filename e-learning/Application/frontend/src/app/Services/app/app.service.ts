import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  host = '192.168.43.245';
  port = '8080';
  baseUrl = `http://${this.host}:${this.port}`;
}
