import {Component,OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Params,ActivatedRoute} from '@angular/router';
import {DataService} from'./data-service';
import {Data} from './data';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {Router} from '@angular/router';
import {Work} from './work';

@Component({
	selector: 'see-details',
	templateUrl: './see-details.html',
	styleUrls:['./see-details.css']
})

export class SeeDetails implements OnInit{
	data: Data;
	work: Work[];
	private itemData;
	constructor(private http:Http,private route:ActivatedRoute,
				private dataservice:DataService,
				private location: Location,
				private router:Router){}
	
	ngOnInit(){
		
		this.getdata(),
		this.workLocation();
		
	}
	getdata(){
		this.route.params
		.switchMap((params:Params)=> this.dataservice.getEmployee(+params['id']))
		
		.subscribe( data => this.data = data)	
	}
	goBack(): void {
    this.location.back();
  }
  save(): void {
  	console.log(this.data);	
    this.dataservice.updateData(this.data)
      .subscribe(res  => {
        console.log('Back from save');
        
    });
  }
  workLocation(){
  	this.dataservice.WorkLocation()
  	.subscribe( work=> this.work = work)
  }
}
  
 