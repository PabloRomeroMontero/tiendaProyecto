import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MenuController} from '@ionic/angular';

@Component({
    selector: 'app-categorias',
    templateUrl: './categorias.page.html',
    styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit, OnDestroy {

    constructor(private router: ActivatedRoute, private menu: MenuController) {
    }

    params: any;

    ngOnInit() {
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

}
