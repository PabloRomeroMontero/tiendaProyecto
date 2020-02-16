import {Component, OnInit} from '@angular/core';
import {Articulos} from '../../interfaces/articulos';
import {CestaCompraService} from '../../services/cesta-compra.service';
import {Router} from '@angular/router';
import {Cesta} from '../../interfaces/cesta';

@Component({
    selector: 'app-cesta-compra',
    templateUrl: './cesta-compra.page.html',
    styleUrls: ['./cesta-compra.page.scss'],
})
export class CestaCompraPage implements OnInit {
    cesta: Cesta[] = [];

    constructor(private cestaCompraService: CestaCompraService, private router: Router) {
    }

    ngOnInit() {
        this.cesta = this.cestaCompraService.getCesta();
    }


    total(price: string, quantity: number) {
        return (parseFloat(price) * quantity);
    }


    totalPrice() {
        let cant = 0;
        for (const value of this.cesta) {
            cant = parseFloat(value.articulo.precio) * parseFloat(value.cantidad.toString());
        }
        return cant;
    }

    cleanCarrito() {
        if (this.cesta.length === 0) {
            this.cestaCompraService.showToast('La cesta ya esta vacia');
        } else {
            this.cesta.splice(0);
            this.cestaCompraService.cleanCart();
        }
    }

    buy() {
        this.cestaCompraService.showToast('Se han comprado los articulos. Se ha descargado un PDF con la factura. Muchas Gracias');
        this.cesta.splice(0);
        this.cestaCompraService.cleanCart();
        this.router.navigateByUrl('/home');
    }


  deleteItem(item: Cesta) {
    this.cesta.splice(this.cesta.indexOf(item), 1);
    this.cestaCompraService.removeFromCarrito(item);

  }
}
