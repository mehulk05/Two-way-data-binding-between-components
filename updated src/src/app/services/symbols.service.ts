import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SymbolsService {

  symbol = { fname: '/', lname: '@', chartno: '#', address: '$' }

  // fname="/"
  constructor() { }
}
