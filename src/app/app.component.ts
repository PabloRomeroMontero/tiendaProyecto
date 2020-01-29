import {Component} from '@angular/core';

import {MenuController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private menu: MenuController,
        private route: Router
    ) {
        this.initializeApp();
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
        this.route.navigateByUrl('home',{replaceUrl: true});
        this.close();
    }

    navegarAFavoritos() {
        this.route.navigateByUrl('favoritos', {replaceUrl: true});
        this.close();
    }

    navegarACategorias() {
        this.route.navigateByUrl('categorias', {replaceUrl: true});
        this.close();
    }

    log_in_out() {
        console.log('funcion Loguin');
    }
}
