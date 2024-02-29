import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent  implements OnInit {

  form = new FormGroup({
    username: new FormControl ('', [Validators.required]),
    email: new FormControl ('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  type = false;
  isLoading!: boolean;

  constructor( 
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {}

  changeType(){
    this.type = !this.type;
  }

  submit(){
    if(!this.form.valid){
      return;
    }
    this.isLoading = true;
    console.log(this.form.value);
    this.authService.register(this.form.value).then((data) => {
      console.log(data);
      
      this.router.navigateByUrl("/tabs", {replaceUrl: true})
      this.isLoading = false;
      this.form.reset();
    }) .catch(e => {
      console.log(e);
      this.isLoading = false;
      let msg = "No se pudo registrar, por favor intenta nuevamente";
      if(e.code == "auth/email-already-in-use"){
        msg = "El correo electrónico ya está en uso, intenta registrarte con otro correo electrónico.";
      }
      this.showAlert(msg);
    });
  }

  async showAlert(message: string) {
    const alert = await this.alertController.create({
      header: "Error de autenticación",
      message,
      buttons: ["OK"]
    });

    await alert.present();
  }

}

