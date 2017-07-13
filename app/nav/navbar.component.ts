import { Component } from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: './app/nav/navbar.component.html',
    styles: [`
        .nav.navbar-nav { font-size: 15px; }
        #searchForm { margin-right: 100px; }
        li > a.active { color: #F97924 }
        @media (max-width: 1200px) { #searchForm { display: none; } }
    `]
})
export class NavbarComponent {

}