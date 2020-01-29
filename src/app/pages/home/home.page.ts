import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {CategoriaDetallePage} from '../categoria-detalle/categoria-detalle.page';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

//     @ViewChild(CategoriaDetallePage, {static: false}) menu: CategoriaDetallePage;
// // + @ViewChild('tabs', { read: Tabs }) private tabs: Tabs;
//     onDrag() {
//     }

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    irAFavoritos() {
        this.router.navigate(['favoritos']);
    }
}
