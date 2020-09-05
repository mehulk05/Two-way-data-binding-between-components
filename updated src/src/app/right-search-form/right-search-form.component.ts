import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';



@Component({
  selector: 'app-right-search-form',
  templateUrl: './right-search-form.component.html',
  styleUrls: ['./right-search-form.component.css']
})
export class RightSearchFormComponent implements OnInit {
  search_string
  inputString: any;
  
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.service.searchString.subscribe(data=>{
      this.search_string=data
    })
  }

  HandlleSearch_Input_onkeyup(value){
    this.service.parseSearchString(value)   
    
  }

  
  ClearAll() {
    this.service.clearAll()
  }
}
