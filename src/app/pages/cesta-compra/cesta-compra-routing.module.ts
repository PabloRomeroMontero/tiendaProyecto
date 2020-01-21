import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CestaCompraPage } from './cesta-compra.page';

const routes: Routes = [
  {
    path: '',
    component: CestaCompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CestaCompraPageRoutingModule {}
