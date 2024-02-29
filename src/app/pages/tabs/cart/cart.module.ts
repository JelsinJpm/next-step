import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
import { CartItemComponent } from 'src/app/components/cart-item/cart-item.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
    SharedModule
  ],
  declarations: [CartPage, CartItemComponent]
})
export class CartPageModule {}
