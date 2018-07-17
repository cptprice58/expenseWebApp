import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ExpenseService } from '../../services/expense.service';
import { Record } from '../../models/Record';
import {Router} from '@angular/router';

@Component({
  selector: "app-expense",
  templateUrl: "./expense.component.html",
  styleUrls: ["./expense.component.css"]
})

export class ExpenseComponent implements OnInit {

  constructor(private expenseService: ExpenseService, private router: Router) {}


  ngOnInit() {}

  onSubmitted(data) {
    this.expenseService.pushData("/",{
      value: data.value.expense,
      type: 'Gider'
    });
    this.router.navigateByUrl('/');
  }
}
