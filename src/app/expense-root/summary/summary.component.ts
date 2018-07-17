import { Component, OnInit, Input } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  totalExpense : number = 0;
  totalIncome : number = 0;

  constructor(private expenseService:ExpenseService) { 
    this.getTotal();
    

  }

  getTotal():void{
    this.expenseService.getData("/",'Gider').forEach((elem)=>{
      this.totalExpense=0;
      for (let i = 0; i < elem.length; i++) {
        this.totalExpense += elem[i].value;         
      }
    })
    this.expenseService.getData("/",'Gelir').forEach((elem)=>{
      this.totalIncome=0;
      for (let i = 0; i < elem.length; i++) {
        this.totalIncome += elem[i].value;         
      }
    })
  }



  ngOnInit() {
  }

}
