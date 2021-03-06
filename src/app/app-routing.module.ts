import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)},
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'cesta-compra',
        loadChildren: () => import('./pages/cesta-compra/cesta-compra.module').then(m => m.CestaCompraPageModule)
    },
    {
        path: 'favoritos',
        loadChildren: () => import('./pages/favoritos/favoritos.module').then(m => m.FavoritosPageModule)
    },
    {
        path: 'categorias',
        loadChildren: () => import('./pages/categorias/categorias.module').then(m => m.CategoriasPageModule)
    },
    {
        path: 'categorias/:id',
        loadChildren: () => import('./pages/categorias/categorias.module').then(m => m.CategoriasPageModule)
    },
    {
        path: 'articulos-detalle/:id',
        loadChildren: () => import('./pages/articulos-detalle/articulos-detalle.module').then(m => m.ArticulosDetallePageModule)
    },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },  {
    path: 'contacto',
    loadChildren: () => import('./pages/contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'desarrollador-de-la-app',
    loadChildren: () => import('./pages/desarrollador-de-la-app/desarrollador-de-la-app.module').then( m => m.DesarrolladorDeLaAppPageModule)
  },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
