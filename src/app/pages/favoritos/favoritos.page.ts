import {Component, OnDestroy, OnInit} from '@angular/core';
import {Articulos} from '../../interfaces/articulos';
import {FavoritosService} from '../../services/favoritos.service';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit, OnDestroy {
  favs: Articulos[] = [];

  constructor( private favoritos: FavoritosService, private menu: MenuController) {
    console.log('he construido Favs');
  }

  ngOnInit() {
    this.favs = this.favoritos.getFavoritos();
    console.log('el console a destiempo del onInit');
  }

  ngOnDestroy() {
    console.log('he sido destruido');
  }

  unfav(item: Articulos) {
    this.favoritos.cambiarFavoritos(item);
  }
}
