import {Injectable} from '@angular/core';
import {Articulos} from '../interfaces/articulos';
import {Categoria} from '../interfaces/categoria';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {

    articulos: Articulos[] = [];
    // categorias: Categoria[] = [];

    urlCrud = 'https://tiendaproyecto-143b4.firebaseio.com';

    constructor(private http: HttpClient) {
    }

    getArticulos() {
        return this.http.get(`${this.urlCrud}/articulos.json`)
            .pipe(
                map(this.createArray)
            );
    }

    getCategorias() {
        return this.http.get(`${this.urlCrud}/categorias.json`)
            .pipe(
                map(this.createArray)
            );
    }

    getArticulosCategoria(idCategoria: string): Articulos[] {
        this.articulos = [];
        switch (idCategoria) {
            case 'hombre': {
                this.getArticulos().subscribe(data => {
                        console.log(data + 'hols¡');
                    }
                );
                break;
            }

            case 'mujer': {
                break;
            }

            case 'infatil': {
                break;
            }
            default: {
                break;
            }
        }
        return this.articulos;
    }

    getSlider() {
        return this.http.get(`${this.urlCrud}/slider.json`);
    }


    private createArray(newsObj: object) {
        const nuevaLista: any[] = [];
        if (newsObj === null) {
            return [];
        }
        Object.keys(newsObj).forEach(key => {
            if (key !== '0') {
                const ne: Categoria = newsObj[key];
                ne.id = key;
                nuevaLista.push(ne);
            }
        });
        return nuevaLista;
    }
}
