import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { SymbolsService } from '../services/symbols.service';
import { LabelService } from '../services/label.service';

@Component({
  selector: 'app-left-search-from',
  templateUrl: './left-search-from.component.html',
  styleUrls: ['./left-search-from.component.css']
})
export class LeftSearchFromComponent implements OnInit {

  fname: string
  address: string
  chartno: string
  lname: string




  constructor(private service: SharedService,
    private symbolservic: SymbolsService,
    private labelservice:LabelService) { }

  symbol = {
    fname: this.symbolservic.symbol.fname,
    lname: this.symbolservic.symbol.lname,
    chartno: this.symbolservic.symbol.chartno,
    address: this.symbolservic.symbol.address
  }

  label = {
    fname: this.labelservice.label.fname,
    lname: this.labelservice.label.lname,
    chartno: this.labelservice.label.chartno,
    address: this.labelservice.label.address
  }

  ngOnInit(): void {
    this.service.inputString.subscribe(data => {
      if (!data) {
        this.fname = ""
        this.lname = ""
        this.chartno = ""
        this.address = ""
      }
      if (data?.fname) {
        this.fname = data.fname
      }

      if (data?.lname) {
        this.lname = data.lname
      }

      if (data?.chartno) {
        this.chartno = data.chartno
      }

      if (data?.address) {
        this.address = data.address
      }
    })
  }


  handleInput_On_Enter(inputvalue) {
    this.AppendSymbol(inputvalue)

  }

  AppendSymbol(value) {
    this.service.appendSymbol(value, this.fname, this.lname, this.chartno, this.address)

  }


}
