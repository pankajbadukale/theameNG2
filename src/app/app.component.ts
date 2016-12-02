/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation, Directive } from '@angular/core';
import { AppState } from './app.service';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  template: require('./app.component.html')
})
export class AppComponent {
  name = 'Admin'; 

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}