import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent  implements OnInit {


  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  })
  
  constructor(private firabaseSvc: AuthService, private toastController: ToastController ) { }

  ngOnInit() {}
  
  async submit(){
    if(this.form.valid){
      this.firabaseSvc.sendRecoveryEmail(this.form.value.email);
      const toast = await this.toastController.create({
        icon: "mail-outline",
        message: 'Correo enviado con éxito',
        duration: 2000,
        position: 'middle'
      });
      toast.present();
    }
  }

}
