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
                console.log(key);
                const ne: Categoria = newsObj[key];
                ne.id = key;
                nuevaLista.push(ne);
            }
        });
        return nuevaLista;
    }
}
