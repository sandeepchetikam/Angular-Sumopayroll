import {Component} from '@angular/core';
import {Data} from './data';
import {DataService} from './data-service';
import{Router} from '@angular/router';

@Component({
	selector : "student-details",
	templateUrl : "./student-details.html",
	styleUrls: ['./student-details.css']

})

export class StudentDetails{
	data : Data[];
	errorMessage : String;
	firstName : String;
	lastName : String;
	Gender : String;
	employee = new Data();
	
	
	

	constructor( private dataservice: DataService,
				 private router: Router){}
	ngOnInit(){
    	this.getData();
    }
 
    getData(): void{
        this.dataservice.getDetailsFromDataBase()
        		.subscribe(data => {
           this.data = data;
           console.log(data);
        },
        			error => this.errorMessage = <any>error);
    }

    editDetails(id): void{
    	this.dataservice.updateData(this.employee);
    }
    deleteDetails(id, index: number): void{
    	if (confirm("Are you sure you want to delete ID :" + id + "?")){
    	this.dataservice.delete(id)
    	.subscribe(response => this.getData());
    }
}


    gotoDetails(id):void{
    	this.router.navigate(['/details',+id])
    }
    createEmp():void{
    	this.router.navigate(['/AddEmployee'])
    }

}