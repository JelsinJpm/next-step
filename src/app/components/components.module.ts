import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { IonicModule } from '@ionic/angular';
import { EmptyScreenComponent } from './empty-screen/empty-screen.component';

@NgModule({
  declarations: [
    RestaurantComponent,
    EmptyScreenComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    RestaurantComponent,
    EmptyScreenComponent
  ]
})
export class ComponentsModule { }
