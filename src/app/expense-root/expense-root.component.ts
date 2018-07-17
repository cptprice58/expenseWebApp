import { Component, OnInit } from '@angular/core';
import { Record } from '../models/Record';
import { ExpenseService } from '../services/expense.service';
import { Observable } from '../../../node_modules/rxjs';


@Component({
  selector: 'app-expense-root',
  templateUrl: './expense-root.component.html',
  styleUrls: ['./expense-root.component.css']
})
export class ExpenseRootComponent implements OnInit {

  public records: Record[] = [];
  public incomes: Observable<any>;
  public expenses: Observable<any>;



  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.expenses = this.expenseService.getData("/",'Gider');
    this.incomes = this.expenseService.getData("/",'Gelir');
  }
  
  // getList(): void {
    
  //   this.expenseService.recordsChanged.subscribe((r) => {
  //     this.expenses = this.expenseService.getData("/",'Gider');
  //     this.incomes = this.expenseService.getData("/",'Gelir');
  //   });
  // }
}
