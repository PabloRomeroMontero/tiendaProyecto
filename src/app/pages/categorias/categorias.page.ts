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
      if (this.params != null) {
        console.log(this.categorias);
        for (const categoria of this.categorias) {
          console.log(this.params + '-' + categoria);
          if (this.params === categoria.id) {
            this.categoriaSeleccionada = categoria;
          }
        }
        this.articulos = this.fire.getArticulosCategoria(this.params);
      }
    }

    params: any;
    categorias: Categoria[] = [];
    articulos: Articulos[] = [];
    categoriaSeleccionada: Categoria;

    ngOnInit() {
        this.fire.getCategorias().subscribe(data => {
            this.categorias = data;
        });
        this.router.params.subscribe(params => {
            this.params = params.id;
            console.log(params.id);
        });




        // this.menu.enable(false, 'custom');
    }

    ngOnDestroy(): void {
        this.params = null;
        console.log('Destruyo categorias');
    }

    irACategoria(id: string) {
        this.route.navigate(['categorias', id]);
    }
}
