import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [IonicModule],
  declarations: [ButtonComponent],
  exports: [ButtonComponent]
})
export class SharedModule {}