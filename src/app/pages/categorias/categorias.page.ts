import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuController} from '@ionic/angular';
import {Categoria} from '../../interfaces/categoria';
import {FirebaseService} from '../../services/firebase.service';
import {Articulos} from '../../interfaces/articulos';

@Component({
    selector: 'app-categorias',
    templateUrl: './categorias.page.html',
    styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit, OnDestroy {

    constructor(private router: ActivatedRoute, private route: Router, private menu: MenuController, private fire: FirebaseService) {
    }

    params: any;
    categorias: Categoria[] = [];
    articulos: Articulos[] = [];
    categoriaSeleccionada = '';

    ngOnInit() {
        this.fire.getCategorias().subscribe(data => {
            this.categorias = data;
        });
        this.router.params.subscribe(params => {
            this.params = params.id;
            console.log(params.id);
        });


        switch (this.params) {
            case 'hombre': {
                this.categoriaSeleccionada = 'Moda Masculina';

                this.fire.getArticulos().subscribe(data => {
                        for (const articulo of data) {
                            if (articulo.categoria === 1 || articulo.categoria === 4) {
                                console.log(articulo.nombre);
                                this.articulos.push(articulo);
                            }
                        }
                    }
                );
                break;
            }

            case 'mujer': {
                this.categoriaSeleccionada = 'Moda Femenina';

                this.fire.getArticulos().subscribe(data => {
                        for (const articulo of data) {
                            if (articulo.categoria === 2 || articulo.categoria === 3) {
                                console.log(articulo.nombre);
                                this.articulos.push(articulo);
                            }
                        }
                    }
                );
                break;
            }

            case 'infantil': {
                this.categoriaSeleccionada = 'Moda Infantil';

                this.fire.getArticulos().subscribe(data => {
                        for (const articulo of data) {
                            if (articulo.categoria === 3 || articulo.categoria === 4) {
                                console.log(articulo.nombre);
                                this.articulos.push(articulo);
                            }
                        }
                    }
                );
                break;
            }
            default: {
                for (const categoria of this.categorias) {
                    if (categoria.id === this.params) {
                        this.categoriaSeleccionada = categoria.nombre;
                    }
                }
                this.fire.getArticulos().subscribe(data => {
                        for (const articulo of data) {
                            // tslint:disable-next-line:radix
                            if (articulo.categoria === parseInt(this.params)) {
                                console.log(articulo.nombre);
                                this.articulos.push(articulo);
                            }
                        }
                    }
                );
                break;
            }
        }


        // this.menu.enable(false, 'custom');
    }

    ngOnDestroy(): void {
        this.params = null;
        console.log('Destruyo categorias');
    }

    irACategoria(id: string) {
        this.route.navigate(['categorias', id]);
    }

    irACesta() {
        this.route.navigate(['cesta-compra']);
    }

    irAArticulo(id: string) {
        this.route.navigate(['articulos-detalle', id]);
    }
}
