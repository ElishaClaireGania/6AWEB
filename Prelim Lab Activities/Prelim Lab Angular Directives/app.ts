import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Directives } from './directives/directives';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Directives],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('directives');
}
