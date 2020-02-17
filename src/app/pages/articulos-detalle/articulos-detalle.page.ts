import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Articulos} from '../../interfaces/articulos';
import {FirebaseService} from '../../services/firebase.service';
import {ModalController} from '@ionic/angular';
import {CategoriasPage} from '../categorias/categorias.page';
import {ModalComponent} from '../../component/modal/modal.component';
import {CestaCompraService} from '../../services/cesta-compra.service';
import {FavoritosService} from '../../services/favoritos.service';

@Component({
    selector: 'app-articulos-detalle',
    templateUrl: './articulos-detalle.page.html',
    styleUrls: ['./articulos-detalle.page.scss'],
})
export class ArticulosDetallePage implements OnInit {
    params: any;
    articulo: Articulos;
    slidesConfigTop = {
        autoplay: 1,
        pager: true
    };
    cantidad = 1;


    constructor(private fav: FavoritosService, private router: ActivatedRoute, private fire: FirebaseService,
                private modalCtrl: ModalController,
                private cesta: CestaCompraService, private route: Router) {
        this.router.params.subscribe(params => {
            this.params = params.id;
        });


        this.fire.getArticulos().subscribe(data => {
            for (const articulo of data) {
                if (this.params === articulo.id) {
                    this.articulo = articulo;
                }
            }
        });
    }

    ngOnInit() {
    }

    async showModal(descripcion: string) {
        const modal = await this.modalCtrl.create({
                component: ModalComponent,
                componentProps: {
                    data: descripcion
                }
            }
        );
        await modal.present();
    }

    masArticulos() {
        this.cantidad++;
    }


    menosArticulos() {
        if (this.cantidad > 1) {
            this.cantidad--;
        }
    }

    adirACesta() {
        this.cesta.addToCesta({
            cantidad: this.cantidad,
            articulo: this.articulo
        });
        this.cantidad = 1;
    }

    irACesta() {
        this.route.navigate(['cesta-compra']);
    }


    cambiarFavorito(item: Articulos) {
        console.log('Antes ' + this.fav.getFavoritos());
        this.fav.cambiarFavoritos(item);
        console.log('Despues ' + this.fav.getFavoritos());

    }

    esFaveado(item: Articulos) {
        return this.fav.isTheItemFaved(item);
    }
}
