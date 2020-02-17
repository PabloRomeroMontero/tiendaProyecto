import {Component, OnDestroy, OnInit} from '@angular/core';
import {Articulos} from '../../interfaces/articulos';
import {FavoritosService} from '../../services/favoritos.service';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  favs: Articulos[] = [];

  constructor( private favoritos: FavoritosService, private menu: MenuController, private route: Router) {
  }

  ngOnInit() {
    this.favs = this.favoritos.getFavoritos();
  }

  unfav(item: Articulos) {
    this.favoritos.cambiarFavoritos(item);
  }

  iraArticulo(id: string) {
    this.route.navigate(['articulos-detalle', id]);
  }
}
