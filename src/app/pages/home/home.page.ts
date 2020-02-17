import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import {FirebaseService} from '../../services/firebase.service';
import {Categoria} from '../../interfaces/categoria';
import {Articulos} from '../../interfaces/articulos';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    constructor(private router: Router, private fire: FirebaseService, private menu: MenuController) {
    }

    slider: any[] = [];
    categorias: Categoria[] = [];
    articulos: Articulos[] = [];
    sliderConfigArticles = {
        slidesPerView: 2.6,
        spaceBetween: 5,
        centeredSlides: false,
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
        this.fire.getCategorias().subscribe(data => {
            this.categorias = data;
        });
        this.fire.getArticulos().subscribe(data => {
            data.sort(() => {
                    return Math.random() - 0.5;
                }
            );
            console.log(data);

            for (const id of [1, 2, 3, 4, 5]) {
                console.log(Math.random() - 0.5);
                this.articulos.push(data[id]);
            }
        });
    }


    irACategoria(id: string) {
        this.router.navigate(['categorias', id]);
    }

    irAArticulo(id: string) {
        this.router.navigate(['articulos-detalle', id]);
    }


    irACesta() {
        this.router.navigate(['cesta-compra']);
    }
}
