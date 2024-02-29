import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodsPageRoutingModule } from './foods-routing.module';

import { FoodsPage } from './foods.page';
import { FoodCardComponent } from 'src/app/components/food-card/food-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodsPageRoutingModule,
  ],
  declarations: [FoodsPage, FoodCardComponent]
})
export class FoodsPageModule {}
