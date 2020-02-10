import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MenuController} from '@ionic/angular';
import {Categoria} from '../../interfaces/categoria';
import {FirebaseService} from '../../services/firebase.service';

@Component({
    selector: 'app-categorias',
    templateUrl: './categorias.page.html',
    styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit, OnDestroy {

    constructor(private router: ActivatedRoute, private menu: MenuController, private fire: FirebaseService) {
    }

    params: any;
    categorias: Categoria[] = [];

    ngOnInit() {
        this.fire.getCategorias().subscribe(data => {
            this.categorias = data;
        });
        this.router.params.subscribe(params => {
            this.params = params.id;
            console.log(params.id);
        });

        if (this.params != null) {
            this.fire.getArticulosCategoria(this.params);
        }


        // this.menu.enable(false, 'custom');
    }

    ngOnDestroy(): void {
        this.params = null;
        console.log('Destruyo categorias');
    }

}
