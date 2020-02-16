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
        console.log('He Entrado en el metodo');
        if (this.favorites.length === 0) {
            console.log('añadido');
            this.favorites.unshift(item);
        } else if (this.favorites.length !== 0) {
            if (this.favorites.indexOf(item) === -1) {
                console.log('articulo añadido');
                this.favorites.unshift(item);
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
