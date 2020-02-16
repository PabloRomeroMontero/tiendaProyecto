import {Injectable} from '@angular/core';
import {Cesta} from '../interfaces/cesta';
import {ToastController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class CestaCompraService {

    cesta: Cesta[] = [];
    private oldArt: Cesta;

    constructor(private toast: ToastController) {
    }

    getCesta() {
        return this.cesta;
    }

    addToCesta(article: Cesta) {
        if (this.cesta.length === 0) {
            this.cesta.unshift(article);
            this.showToast(article.cantidad + ' ' + article.articulo.nombre + ' añadido a la cesta!');
        } else {
            if (this.isAnOldArticle(article.articulo.id)) {
                this.cesta[this.cesta.indexOf(this.oldArt)].cantidad =
                    this.cesta[this.cesta.indexOf(this.oldArt)].cantidad + article.cantidad;
                this.showToast(article.cantidad + ' ' + article.articulo.nombre + ' añadido a la cesta! , ahora hay ' +
                    this.cesta[this.cesta.indexOf(this.oldArt)].cantidad);
            } else {
                this.cesta.unshift(article);
                this.showToast(article.cantidad + ' ' + article.articulo.nombre + ' añadido a la cesta!');
            }
        }
        this.oldArt = null;
    }


    async showToast(msg: string) {
        const toasting = await this.toast.create({
            message: msg,
            duration: 2300,
            position: 'middle'
        });
        await toasting.present();
    }

    isAnOldArticle(idArticulo: string) {
        for (const value of this.cesta) {
            if (idArticulo === this.cesta[this.cesta.indexOf(value)].articulo.id) {
                this.oldArt = this.cesta[this.cesta.indexOf(value)];
                return true;
            }
        }
        return false;
    }


    cleanCart() {
      this.cesta.splice(0);
    }

    removeFromCarrito(article: Cesta) {
        this.cesta.splice(this.cesta.indexOf(article), 1);
        this.showToast('Articulo Eliminado');
    }
}
