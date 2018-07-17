import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { Record } from '../models/Record';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {AngularFireDatabase} from 'angularfire2/database'
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  recordsChanged = new Subject();


  http: Http;

  constructor(http: Http,public firebase:AngularFireDatabase) {
    this.http = http;
    this.firebase = firebase;
  }

  public getData(location:string, type:string):Observable<any>{
    return this.firebase.list(location, ref => ref.orderByChild('type').equalTo(type)).valueChanges();
  }
  public pushData(location:string, record:object):void{
    this.firebase.list(location).push(record);
  }

  private records: Record[] = [];
  
  getRecords(type: string)  {

    return this.records.filter(r => r.type === type);
  }
  getExpense(){
    return this.records.filter(r => r.type == 'Gider');
  }
  getIncome(){
    return this.records.filter (r => r.type == 'Gelir');
  }


//  getApiRecords(){
//    return this.http.get('https://test-abcea.firebaseio.com/')
//     .subscribe((response) => {
//       this.records = Object.values(response.json());
//     })
// }

  

  // setRecord(record: Record) {

  //   this.http.post('http://api.webbilir.com/api/expenses', record)
  //   .subscribe(
  //     (transformedData: any) => {
  //         this.records.push(transformedData);
  //         this.recordsChanged.next();
  //     }
  // );


  //   this.recordsChanged.next();
  // }

}
