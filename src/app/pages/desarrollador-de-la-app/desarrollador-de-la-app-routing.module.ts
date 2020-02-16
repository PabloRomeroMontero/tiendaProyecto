import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesarrolladorDeLaAppPage } from './desarrollador-de-la-app.page';

const routes: Routes = [
  {
    path: '',
    component: DesarrolladorDeLaAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesarrolladorDeLaAppPageRoutingModule {}
