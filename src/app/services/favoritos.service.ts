import {Injectable} from '@angular/core';
import {Articulos} from '../interfaces/articulos';

@Injectable({
    providedIn: 'root'
})
export class FavoritosService {

    favorites: Articulos[] = [];

    constructor() {
    }

    getFavoritos() {
        return this.favorites;
    }

    cambiarFavoritos(item: Articulos) {
        if (this.favorites.length === 0) {
            console.log('añadido');
            this.favorites.push(item);
        } else if (this.favorites.length !== 0) {
            if (this.favorites.indexOf(item) === -1) {
                console.log('articulo añadido');
                this.favorites.push(item);
            } else {
                console.log('Articulo Eliminado')
                this.favorites.splice(this.favorites.indexOf(item), 1);
            }
        }
    }

   isTheItemFaved(item: Articulos) {
        return this.favorites.indexOf(item) !== -1;
    }
}
