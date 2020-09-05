import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  
  label = {
    fname: 'First name',
    lname: 'Last Name',
    chartno: 'Chart No',
    address: 'Address1'
  }
  constructor() { }
}
