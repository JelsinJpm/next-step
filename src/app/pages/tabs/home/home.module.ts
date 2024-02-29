import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CommonModule,
    ComponentsModule
  ],
  declarations: [HomePage, PopoverComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
