import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  fname: string
  add: string
  chartno: string
  lname: string
  value
  main = ''

  label = {
    fname: 'First name',
    lname: 'Last Name',
    chartno: 'Chart No',
    add: 'Address1'
  }


  symbol = { fname: '/', lname: '@', chartno: '#', add: '$' }

  constructor() { }

  ngOnInit(): void {
    console.log(this.main)
  }



  getInput(value) {
    this.AppendSymbol(value)
    console.log(value)
    this.value = value
  }

  HandleSearch(value) {

    let a = value.indexOf(this.symbol.fname)
    console.log(a)
    if (a === 0) {
      this.fname = value.substring(a + 1, value.length)
    }


    let b = value.indexOf(this.symbol.lname)
    if (b > -1) {
      this.fname = value.substring(a + 1, b)
    }
    console.log(b)


    let c = value.indexOf(this.symbol.chartno)
    if (c === -1 && b > 1) {
      this.lname = value.substring(b + 1, value.length)
    }
    console.log(c)
    if (c > -1)
      this.lname = value.substring(b + 1, c)



    let d = value.indexOf(this.symbol.add)
    if (d === -1 && c > 1) {
      this.chartno = value.substring(c + 1, value.length)
    }

    if (d > -1) {
      this.add = value.substring(d + 1, value.length)
    }
    console.log(d)
    //  if(value.indexOf('/')>-1){  
    //    let temp = value.split('/')
    //    this.fname=temp[1]

    //  }

    //  if(value.indexOf('@')>-1){  
    //   let temp = value.split('@')
    //   this.lname=temp[1]

    // }


    // if(value.indexOf('#')>-1){  
    //   let temp = value.split('#')
    //   this.chartno=temp[1]

    // }

    // if(value.indexOf('$')>-1){  
    //   let temp = value.split('$')
    //   this.add=temp[1]

    // }

  }

  AppendSymbol(value) {
    if (value === this.fname) {
      this.main = this.symbol.fname + value
    }

    if (value === this.lname) {
      this.main = this.main + this.symbol.lname + value
    }

    if (value === this.chartno) {
      this.main = this.main + this.symbol.chartno + value
    }

    if (value === this.add) {
      this.main = this.main + this.symbol.add + value
    }
  }

  ClearAll() {
    console.log("clciked")
    this.fname = ""
    this.lname = ""
    this.chartno = ""
    this.add = ""
    this.main = ""

  }
}
