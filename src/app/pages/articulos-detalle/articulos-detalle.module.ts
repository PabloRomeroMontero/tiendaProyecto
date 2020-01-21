import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticulosDetallePageRoutingModule } from './articulos-detalle-routing.module';

import { ArticulosDetallePage } from './articulos-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticulosDetallePageRoutingModule
  ],
  declarations: [ArticulosDetallePage]
})
export class ArticulosDetallePageModule {}
