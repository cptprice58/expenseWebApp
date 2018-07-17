import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ExpenseRootComponent } from './expense-root/expense-root.component';
import { ExpenseComponent } from './expense-root/expense/expense.component';
import { IncomeComponent } from './expense-root/income/income.component';
import { SummaryComponent } from './expense-root/summary/summary.component';
import { RecordComponent } from './expense-root/record/record.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';


const appRoutes: Routes = [
  { path: 'gelir', component: IncomeComponent },
  {path: 'gider', component: ExpenseComponent },
  { path: '', component: ExpenseRootComponent }
  ];
  @NgModule({
  declarations: [
    AppComponent,
    ExpenseRootComponent,
    ExpenseComponent,
    IncomeComponent,
    SummaryComponent,
    RecordComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
