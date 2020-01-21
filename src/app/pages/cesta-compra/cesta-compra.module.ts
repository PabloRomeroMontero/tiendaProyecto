import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CestaCompraPageRoutingModule } from './cesta-compra-routing.module';

import { CestaCompraPage } from './cesta-compra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CestaCompraPageRoutingModule
  ],
  declarations: [CestaCompraPage]
})
export class CestaCompraPageModule {}
