import{Component} from '@angular/core';
import{DataService} from './data-service';
import {Data} from './data';
import {Work} from './work';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {GrowlModule,Message} from 'primeng/primeng';




@Component({
	selector:'employee-form',
	templateUrl:'./employee-form.html',
	styleUrls:['./employee-form.css']
})



export class EmployeeForm{
	datas : Data[];
	work: Work[];
	errorMessage : String;
	dateOfbirth : Date;
	id : number;
	firstName : String;
	lastName  : String;
	employeeType : String;
	aadharNo: String;
	panNo: String;
	workLocation:String;
	phoneNo: string;
	emailId: string;
	State: string;
	works = new Work();
	data = new Data();
	City : String;
	clicked = false;
	click = false;
	Gender: String;
	Department: string;
	Title: string;
	Jobdescription: string;
	Startdate: Date;
	Empployeeid: number;
	saveSuccess: boolean;
	 msgs: Message[] = [];
	   public edited = false;

    showSuccess() {
        this.msgs = [];
        this.msgs.push({severity:'success', summary:'Success Message', detail:'Order submitted'});
    }

constructor(private dataservice: DataService,
	private location:Location,
	private router: Router){}

getData(): void{
        this.dataservice.getDetailsFromDataBase()
        		.subscribe(datas => this.datas = datas,
        			error => this.errorMessage = <any>error);
    }

	addEmployee(): void{
		console.log(this.data);
		this.edited = true;	
			this.dataservice.addEmployees(this.data)
			.subscribe(data => {
				
				this.getData();
					
					
					console.log(data)
					
			}, error => this.errorMessage = <any>error);
		}
	/*saveState(): void{
		this.dataservice.addWorklocation(this.works)
		.subscribe( work=> {
			this.City = work.city;
					this.State = work.state;
		})
	}*/
draftEmployee(): void{
		console.log(this.data);
		this.edited = true;	
			this.dataservice.draftEmployees(this.data)
			.subscribe(data => {
				
				this.getData();
					
					
					console.log(data)
					
			}, error => this.errorMessage = <any>error);
		}
	ngOnInit(){
		this.Worklocation()
	}
	Worklocation(): void{
		this.dataservice.WorkLocation()
		.subscribe(work=> this.work = work)
	}
	changeHandler() {
   		this.clicked = true; 
 	}
 	goBack(): void {
    this.location.back();
  }	
  gotoDetails():void{
    	this.router.navigate(['/ViewEmployees'])
    }
    gotoDraft(): void{
    	this.router.navigate(['/draftemployees'])
    }
  	
}