import {Injectable} from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import {Data} from './data';
import {Work} from './work';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class DataService{
	private data;
	empurl="http://localhost/Angular/connect-employee.php";
	constructor(private http:Http){}

	getDetailsFromDataBase(): Observable<Data[]>{
		return this.http.get(this.empurl)
		.map(this.extractData)
		.catch(this.HandleError)
	}
	draftData(): Observable<Data[]>{
		const empurl="http://localhost/Angular/draft-employee.php";
		return this.http.get(empurl)
		.map(this.extractData)
		.catch(this.HandleError)
	}
		WorkLocation(): Observable<Work[]>{
			const wurl="http://localhost/Angular/worklocation.php"
  		return this.http.get(wurl)
		.map(this.extractData)
		.catch(this.HandleError)
  	}

	updateData(employee: Data):Observable<Data>{
  				let headers = new Headers();
				headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
				let emp= "data="+ JSON.stringify(employee);
				const eurl='http://localhost/Angular/updatingemployee.php?id='
				const url= `${eurl}${employee.id}`
				
				console.log(emp);
  				return this.http
  				.post(url,emp,{headers: headers})
  				.map(this.extractData)
  				
  				.catch(this.HandleError)
  			}
	getEmployee(id : number){
				const eurl='http://localhost/Angular/UpdateEmployee.php?id='
  				const url= `${eurl}${id}`
  				return this.http.get(url)
  				.map(this.extractData)
  				.catch(this.HandleError)

  			}
  	addEmployees(data: Data): Observable<Data>{
  		
				let headers = new Headers();
				headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
				const body = 'data=' + JSON.stringify(data);
				const url="http://localhost/Angular/addingEmployee.php"
				console.log(body);
				return this.http.post(url,body,{ headers })
						.map(this.extractData)
						.catch(this.HandleError)

			}
			delete(id : number){
				let headers = new Headers({'Content-Type': 'application/json'});
				let options = new RequestOptions({headers: headers});
				const url = `http://localhost/Angular/delete.php?id=`
    			return this.http.delete(`${url}${id}`)	
  			}

  			search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }
  			searchEntries(term) {
  				const baseUrl="http://localhost/Angular/search.php?search="
    return this.http
        .get(baseUrl + term)
        .map(res => res.json());
  }
  	searchKey(searchkey){
  		const url="http://localhost/Angular/search.php?search="
  		return this.http 
  		.get(url + searchkey)
  		.map(res => res.json());
  	}
  	addWorklocation(work : Work): Observable<Work>{
  		let headers = new Headers();
				headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
				const body = 'data=' + JSON.stringify(work);
				const url="http://localhost/Angular/addingEmployee.php"
				console.log(body);
				return this.http.post(url,body,{ headers })
						.map(this.extractData)
						.catch(this.HandleError)

			
  	}
  	draftEmployees(data: Data): Observable<Data>{
  		
				let headers = new Headers();
				headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
				const body = 'data=' + JSON.stringify(data);
				const url="http://localhost/Angular/draft.php"
				console.log(body);
				return this.http.post(url,body,{ headers })
						.map(this.extractData)
						.catch(this.HandleError)

			}
  	

	 private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
	private HandleError(error: Response| any){
		console.log(error.message || error);
				return Observable.throw( error.message || error);
		}
}