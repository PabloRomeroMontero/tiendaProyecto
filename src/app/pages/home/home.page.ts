import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {CategoriaDetallePage} from '../categoria-detalle/categoria-detalle.page';
import {Router} from '@angular/router';
import {FirebaseService} from '../../services/firebase.service';
import {forEach} from '@angular-devkit/schematics';
import {Categoria} from '../../interfaces/categoria';
import {Articulos} from '../../interfaces/articulos';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    constructor(private router: Router, private fire: FirebaseService) {
    }

    slider: any[] = [];
    categorias: Categoria[] = [];
    articulos: Articulos[] = [];
    sliderConfigArticles = {
        slidesPerView: 2.6,
        spaceBetween: 5,
        centeredSlides: true,
        autoplay: 1,
        pager: true
    };
    slidesConfigTop = {
        autoplay: 1
    };


    ngOnInit() {
        this.fire.getSlider().subscribe(data => {
            this.slider.push(data[1]);
            this.slider.push(data[2]);
            this.slider.push(data[3]);
        });
        this.fire.getCategorias().subscribe( data => {
           this.categorias = data;
        });
        this.fire.getArticulos().subscribe( data => {
            this.articulos = data;
        });
    }

    irACategoria(id: string) {
        this.router.navigate(['categorias', id]);
    }




}
