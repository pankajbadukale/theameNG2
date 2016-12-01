/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

/*
 * Navigation Component
 * Top Level Component
 */
@Component({
  selector: 'content',
  encapsulation: ViewEncapsulation.None,
  template: require('./content.component.html')
})
export class ContentComponent {
  constructor() {}
}