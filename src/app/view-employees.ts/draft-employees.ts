import {Component} from '@angular/core';
import {Data} from '../data';
import {DataService} from '../data-service';
import {Router} from '@angular/router';
import { Subject } from 'rxjs/Subject';
@Component({
	selector: 'draft-employees',
	templateUrl: './draft-employees.html',
	styleUrls: ['./view-employees.css']
})

export class DraftEmployees{

constructor(private dataservice:DataService,
			private router: Router){
	this.dataservice.search(this.searchTerm$)
      .subscribe(data => {
        this.data = data;
        
        
      });
}
	data : Data[];
	public errorMessage;
	searchTerm$ = new Subject<string>();

	ngOnInit(){
		this.fetchData()
	}
	fetchData(){
		this.dataservice.draftData()
        		.subscribe(data => {
           this.data = data;
        },
        			error => this.errorMessage = <any>error);
    }
    createEmp():void{
    	this.router.navigate(['/AddEmployee'])
    }
    draft(): void{
    	this.router.navigate(['/draftemployees'])
    }
    gotoDetails(id):void{
    	this.router.navigate(['/empdetails',+id])
    }
    active(){
        this.router.navigate(['/ViewEmployees'])
    }
	}

