import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesarrolladorDeLaAppPageRoutingModule } from './desarrollador-de-la-app-routing.module';

import { DesarrolladorDeLaAppPage } from './desarrollador-de-la-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesarrolladorDeLaAppPageRoutingModule
  ],
  declarations: [DesarrolladorDeLaAppPage]
})
export class DesarrolladorDeLaAppPageModule {}
