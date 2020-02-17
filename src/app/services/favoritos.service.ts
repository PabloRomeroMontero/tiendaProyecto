import {Injectable} from '@angular/core';
import {Articulos} from '../interfaces/articulos';

@Injectable({
    providedIn: 'root'
})
export class FavoritosService {

    favorites: Articulos[] = [];
    contador = 0;

    constructor() {
    }

    getFavoritos() {
        return this.favorites;
    }

    cambiarFavoritos(item: Articulos) {
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
        this.contador++;
        console.log(this.favorites + 'articulos en favorito');
        console.log(item.nombre + ' articulo a comprobar');
        console.log('Este articulo esta ya faveado' + (this.favorites.indexOf(item) !== -1));
        return this.favorites.indexOf(item) !== -1;
    }
}
