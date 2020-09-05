import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SymbolsService } from './symbols.service';

@Injectable({
  providedIn: 'root'
})

export class SharedService {


  constructor(private symbolservic: SymbolsService) { }

  symbol = {
    fname: this.symbolservic.symbol.fname,
    lname: this.symbolservic.symbol.lname,
    chartno: this.symbolservic.symbol.chartno,
    address: this.symbolservic.symbol.address
  }

  public searchString = new Subject<string>();
  public inputString = new Subject<any>();
  appended_string



  setSearchString(searchString) {
    this.searchString.next(searchString)
  }


  setInputStrng(value) {
    this.inputString.next(value)
  }


  parseSearchString(value) {

    let indexOf_FnameSymbol = value.indexOf(this.symbol.fname)
    let fname, lname, address, chartno
    if (indexOf_FnameSymbol === 0) {
      fname = value.substring(indexOf_FnameSymbol + 1, value.length)
      this.setInputStrng({ "fname": fname })
    }


    let indexOf_LnameSymbol = value.indexOf(this.symbol.lname)
    if (indexOf_LnameSymbol > -1) {
      fname = value.substring(indexOf_FnameSymbol + 1, indexOf_LnameSymbol)
      this.setInputStrng({ "fname": fname })
    }



    let indexOf_Chartno_Symbol = value.indexOf(this.symbol.chartno)
    if (indexOf_Chartno_Symbol === -1 && indexOf_LnameSymbol > 1) {
      lname = value.substring(indexOf_LnameSymbol + 1, value.length)
      this.setInputStrng({ "lname": lname })
    }


    if (indexOf_Chartno_Symbol > -1) {
      lname = value.substring(indexOf_LnameSymbol + 1, indexOf_Chartno_Symbol)
      this.setInputStrng({ "lname": lname })
    }


    let indexOf_Address_Symbol = value.indexOf(this.symbol.address)
    if (indexOf_Address_Symbol === -1 && indexOf_Chartno_Symbol > 1) {
      chartno = value.substring(indexOf_Chartno_Symbol + 1, value.length)
      this.setInputStrng({ "chartno": chartno })
    }

    if (indexOf_Address_Symbol > -1) {
      address = value.substring(indexOf_Address_Symbol + 1, value.length)
      this.setInputStrng({ "address": address })
    }
  }


 



  appendSymbol(value, fname, lname, chartno, address) {

    if (value === fname) {
      this.appended_string = this.symbol.fname + value

    }

    if (value === lname) {
      this.appended_string = this.appended_string + this.symbol.lname + value

    }

    if (value === chartno) {
      this.appended_string = this.appended_string + this.symbol.chartno + value
    }

    if (value === address) {
      this.appended_string = this.appended_string + this.symbol.address + value
    }
    this.setSearchString(this.appended_string)
  }


  clearAll() {
    this.setInputStrng("")
    this.searchString.next("")
  }

}
