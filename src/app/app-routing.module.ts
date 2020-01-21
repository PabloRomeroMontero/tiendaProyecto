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
        path: 'categoria-detalle',
        loadChildren: () => import('./pages/categoria-detalle/categoria-detalle.module').then(m => m.CategoriaDetallePageModule)
    },
    {
        path: 'categorias',
        loadChildren: () => import('./pages/categorias/categorias.module').then(m => m.CategoriasPageModule)
    },
    {
        path: 'articulos-detalle',
        loadChildren: () => import('./pages/articulos-detalle/articulos-detalle.module').then(m => m.ArticulosDetallePageModule)
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
