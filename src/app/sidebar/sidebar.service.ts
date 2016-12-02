import { Injectable } from '@angular/core';

@Injectable()
export class SidebarLinks {
    leftSidebarLinks: Array<string> = []; 
    constructor() { 
        this.leftSidebarLinks = [
            {
                url: '/',
                text: 'Dashboard',
                iconc: 'fa fa-dashboard fa-fw',
                type: 'ln'
            },
            {
                url: null,
                text: 'Charts',
                iconc: 'fa fa-bar-chart-o fa-fw',
                type: 'static',
                status: false, // close=> false, open=>true
                sub: [
                        {
                            url: '/',
                            text: 'Float Charts',
                            iconc: '',
                            type: 'ln'
                        },
                        {
                            url: '/',
                            text: 'Marris Charts',
                            iconc: '',
                            type: 'ln'
                        }
                ]
            }
        ];
    }
}
