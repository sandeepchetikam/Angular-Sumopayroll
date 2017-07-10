import {Component} from '@angular/core';
import {DataService} from '../data-service';
import {Data} from '../data';
import { Subject } from 'rxjs/Subject';

@Component({
	selector: "employee-directory",
	templateUrl: "./employee-directory.html",
	styleUrls: ['./employee-directory.css']
})

export class EmployeeDirectory { 
	data : Data[];
	searchTerm$ = new Subject<string>();
  public search;
  

	constructor(private dataservice : DataService){

		this.dataservice.search(this.searchTerm$)
      .subscribe(data => {
        this.data = data;
        
        
      });
  }
  
  
  searchkey(search){
    this.dataservice.searchKey(this.search)
    .subscribe(data => this.data = data)
  }
	}

	
