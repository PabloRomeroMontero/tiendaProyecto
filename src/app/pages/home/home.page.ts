import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {CategoriaDetallePage} from '../categoria-detalle/categoria-detalle.page';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    @ViewChild(CategoriaDetallePage) menu: CategoriaDetallePage;

    onDrag() {
        this.menu.close();
    }

    constructor() {
    }

    ngOnInit() {
    }

}
