import { Httpclient } from './httpclient';
import { Quotes } from './quote.model';
import { User } from './user.model';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-httpclient-demo');
  httpusers: User[] = [];
  httpquotes: Quotes[] = [];

  constructor(private httpClient: Httpclient){}


  ngOnInit(){
    this.httpClient.getUsersRemotely().subscribe((data) => {
      this.httpusers = data;
    })

    this.httpClient.getQuotesRemotely().subscribe((data: any) => {
    this.httpquotes = data.quotes;
  });
  }
}
