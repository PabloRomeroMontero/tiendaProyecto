import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticulosDetallePage } from './articulos-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: ArticulosDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticulosDetallePageRoutingModule {}
