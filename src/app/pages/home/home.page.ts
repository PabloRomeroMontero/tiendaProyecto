import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {CategoriaDetallePage} from '../categoria-detalle/categoria-detalle.page';
import {Router} from '@angular/router';
import {FirebaseService} from '../../services/firebase.service';
import {forEach} from '@angular-devkit/schematics';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    constructor(private router: Router, private fire: FirebaseService) {
    }

    slider: any[] = [];


    ngOnInit() {
        this.fire.getSlider().subscribe(data => {
            this.slider.push(data[1]);
            this.slider.push(data[2]);
            this.slider.push(data[3]);
        });
    }

    irAFavoritos() {
        this.router.navigate(['favoritos']);
    }
}
