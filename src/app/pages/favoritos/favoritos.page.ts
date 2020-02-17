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
  }

  ngOnInit() {
    this.favs = this.favoritos.getFavoritos();
  }

  ngOnDestroy() {
  }

  unfav(item: Articulos) {
    this.favoritos.cambiarFavoritos(item);
  }
}
