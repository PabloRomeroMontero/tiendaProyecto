import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePipe } from './pages/home.pipe';
import { CategoriesPipe } from './pages/categories.pipe';
import { CategoriaPipe } from './pages/categoria.pipe';
import { ArticuloPipe } from './pages/articulo.pipe';
import { FavoritosPipe } from './pages/favoritos.pipe';
import { CestaCompraPipe } from './pages/cesta-compra.pipe';

@NgModule({
  declarations: [AppComponent, HomePipe, CategoriesPipe, CategoriaPipe, ArticuloPipe, FavoritosPipe, CestaCompraPipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
