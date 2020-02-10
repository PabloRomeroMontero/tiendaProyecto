import {Component} from '@angular/core';

import {MenuController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import {FirebaseService} from './services/firebase.service';
import {Categoria} from './interfaces/categoria';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    categorias: Categoria[] = [];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private menu: MenuController,
        private route: Router,
        private fire: FirebaseService
    ) {
        this.initializeApp();
        this.fire.getCategorias().subscribe(data => {
            this.categorias = data;
        });
    }

    openFirst() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    close() {
        this.menu.close('custom');
    }

    navegarAHome() {
        this.route.navigateByUrl('home', {replaceUrl: true});
        this.close();
    }

    navegarAFavoritos() {
        this.route.navigateByUrl('favoritos', {replaceUrl: true});
        this.close();
    }

    navegarACategorias() {
        this.route.navigateByUrl('categorias', {replaceUrl: false});
        this.close();
    }

    log_in_out() {
        console.log('funcion Loguin');
    }
}
