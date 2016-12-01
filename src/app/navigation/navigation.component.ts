/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

/*
 * Navigation Component
 * Top Level Component
 */
@Component({
  selector: 'navigation',
  encapsulation: ViewEncapsulation.None,
  template: require('./navigation.component.html')
})
export class NavigationComponent {
  constructor() {}
}