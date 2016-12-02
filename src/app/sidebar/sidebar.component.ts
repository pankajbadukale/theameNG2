/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { SidebarLinks } from './sidebar.service';

/*
 * Navigation Component
 * Top Level Component
 */
@Component({
  selector: 'left-sidebar',
  encapsulation: ViewEncapsulation.None,
  template: require('./sidebar.component.html'),
  providers: [SidebarLinks]
})
export class SidebarComponent {
  constructor(public sdLinks: SidebarLinks) {
    this.linkss = sdLinks.leftSidebarLinks;
  }

  toggleLink(ln) {
      if( ln.type === 'static' ) {
          ln.status === false ? ln['class'] = 'active' : ln['class'] = '';
          ln.status = !ln.status;
      }
      console.log(ln);
  }
}