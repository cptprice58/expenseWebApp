import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ExpenseService } from '../../services/expense.service';
import { Record } from '../../models/Record';
import {Router} from '@angular/router';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})

export class IncomeComponent implements OnInit {
  constructor(private expenseService: ExpenseService, private router: Router) {}

  public value: number;

  ngOnInit() {}

  onSubmitted(data) {
    this.expenseService.pushData("/",{
      value: data.value.income,
      type: 'Gelir'
    });

    this.router.navigateByUrl('/');
  }
}
