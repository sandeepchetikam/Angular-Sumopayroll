import {Component,OnInit} from '@angular/core';
import {DataService} from '../data-service';
import {Data} from '../data';
import {Router} from '@angular/router';
import {Params,ActivatedRoute} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
	selector: 'emp-details',
	templateUrl: './emp-details.html',
	styleUrls: ['./emp-details.css']
})

export class EmpDetails{

	constructor(
		private dataservice: DataService,private route:ActivatedRoute,
		private router:Router){}
	data : Data[];
	public errormessage ;

	ngOnInit(){
		this.getdata()
	}

	
	getdata(){
		this.route.params
		.switchMap((params:Params)=> this.dataservice.getEmployee(+params['id']))
		
		.subscribe( data => this.data = data)	
	}
gotoDetails(id):void{
    	this.router.navigate(['/details',+id])
    }
}

