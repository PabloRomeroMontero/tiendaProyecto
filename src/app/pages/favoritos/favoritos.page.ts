import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit, OnDestroy {

  constructor() {
    console.log('he construido Favs');
  }

  ngOnInit() {
    console.log('el console a destiempo del onInit');
  }

  ngOnDestroy() {
    console.log('he sido destruido fck Xd');
  }

}
