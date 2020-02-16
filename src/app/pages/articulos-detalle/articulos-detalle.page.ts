import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Articulos} from '../../interfaces/articulos';
import {FirebaseService} from '../../services/firebase.service';

@Component({
    selector: 'app-articulos-detalle',
    templateUrl: './articulos-detalle.page.html',
    styleUrls: ['./articulos-detalle.page.scss'],
})
export class ArticulosDetallePage implements OnInit {
    params: any;
    articulo: Articulos;

    constructor(private router: ActivatedRoute, private fire: FirebaseService) {
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
        //     this.router.params.subscribe(params => {
        //         this.fire.getArticulos().subscribe(data => {
        //             this.params = params.id;
        //             for (const articulo of data) {
        //                 if (this.params === articulo.id) {
        //                     this.articulo = articulo;
        //                 }
        //             }
        //         });
        //     });
    }

}
