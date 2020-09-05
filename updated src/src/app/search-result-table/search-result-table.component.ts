import { Component, OnInit } from '@angular/core';
import { LabelService } from '../services/label.service';

@Component({
  selector: 'app-search-result-table',
  templateUrl: './search-result-table.component.html',
  styleUrls: ['./search-result-table.component.css']
})
export class SearchResultTableComponent implements OnInit {

  constructor(private labelservice:LabelService) { }
  label
  ngOnInit(): void {
    this.label = {
      fname: this.labelservice.label.fname,
      lname: this.labelservice.label.lname,
      chartno: this.labelservice.label.chartno,
      address: this.labelservice.label.address
    }
  
  }

}
