import {Component, OnInit} from '@angular/core';
import {Articulos} from '../../interfaces/articulos';
import {CestaCompraService} from '../../services/cesta-compra.service';
import {Router} from '@angular/router';
import {Cesta} from '../../interfaces/cesta';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
    selector: 'app-cesta-compra',
    templateUrl: './cesta-compra.page.html',
    styleUrls: ['./cesta-compra.page.scss'],
})
export class CestaCompraPage implements OnInit {
    cesta: Cesta[] = [];
    pdfObj = null;

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
            cant = +parseFloat(value.articulo.precio) * parseFloat(value.cantidad.toString());
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
        this.createPdf();
        this.downloadPdf();
        this.cestaCompraService.cleanCart();
        this.router.navigateByUrl('/home');
    }


    deleteItem(item: Cesta) {
        this.cesta.splice(this.cesta.indexOf(item), 1);
        this.cestaCompraService.removeFromCarrito(item);

    }


    createPdf() {
        const cestaNombre = [];
        const cestaPrecios = [];
        const cestaCantidad = [];
        for (const articulos of this.cesta) {
            cestaNombre.push(articulos.articulo.nombre);
            cestaPrecios.push(articulos.articulo.precio);
            cestaPrecios.push(articulos.cantidad);
        }
        const docDefinition = {
            content: [
                {text: 'TIENDAS ROMERO', style: 'header'},
                {text: new Date().toTimeString(), alignment: 'right'},

                {text: 'From', style: 'subheader'},
                {text: 'User'},


                {text: 'Los articulos son los siguientes', style: 'story', margin: [0, 20, 0, 20]},

                {
                    ul: cestaNombre
                },
                {text: 'Total: ' + this.totalPrice() + '€'}
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                },
                subheader: {
                    fontSize: 14,
                    bold: true,
                    margin: [0, 15, 0, 0]
                },
                story: {
                    italic: true,
                    alignment: 'center',
                    width: '50%',
                }
            }
        };
        this.pdfObj = pdfMake.createPdf(docDefinition);
    }

    downloadPdf() {
        // On a browser simply use download!
        this.pdfObj.download();
    }


}
