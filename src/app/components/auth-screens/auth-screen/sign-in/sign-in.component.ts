import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  type = true;
  isLoading!: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController,
    private firebaseSvc: FirebaseService,
    private utilsSvc: UtilsService
  ) {}

  ngOnInit() {}

  changeType() {
    this.type = !this.type;
  }

  async submit1() {
    if (this.form.valid) {
      this.isLoading = true;
      this.firebaseSvc.singIn(this.form.value as User).then((res) => {
          this.getUserInfo(res.user.uid);
          this.router.navigateByUrl('/tabs', { replaceUrl: true });
          this.isLoading = false;
          this.form.reset();
        })
        .catch((e) => {
          console.log(e);
          this.isLoading = false;
          let msg = 'No se pudo iniciar sesión, por favor intenta nuevamente';
          if (e.code == 'auth/invalid-credential') {
            msg =
              'Credenciales inválidas. Por favor, verifica tus credenciales e inténtalo de nuevo.';
          } else if (e.code == 'auth/invalid-email') {
            msg =
              'El correo electrónico proporcionado no es válido. Por favor, introduce una dirección de correo electrónico válida e inténtalo de nuevo.';
          }
          this.showAlert(msg);
        });
    }
  }

  async getUserInfo(uid: string) {
    if (this.form.valid) {

      let path = `users/${uid}`;

      this.firebaseSvc
        .getDocument(path)
        .then((user: User) => {
          this.utilsSvc.saveInLocalStorage('user', user);
          this.utilsSvc.routerLink('tabs/home');
          this.form.reset();
        })
        .catch((error) => {
          console.log(error);
          this.utilsSvc.presentToast({
            message: error.message,
            duration: 3000,
            color: 'danger',
            position: 'middle',
            icon: 'alert-circle-outline',
          });
        })
    }
  }

  submit() {
    if (!this.form.valid) {
      return;
    }
    this.isLoading = true;
    console.log(this.form.value);
    this.authService
      .login(this.form.value)
      .then((data) => {
        console.log(data);

        this.router.navigateByUrl('/tabs', { replaceUrl: true });
        this.isLoading = false;
        this.form.reset();
      })
      .catch((e) => {
        console.log(e);
        this.isLoading = false;
        let msg = 'No se pudo iniciar sesión, por favor intenta nuevamente';
        if (e.code == 'auth/invalid-credential') {
          msg =
            'Credenciales inválidas. Por favor, verifica tus credenciales e inténtalo de nuevo.';
        } else if (e.code == 'auth/invalid-email') {
          msg =
            'El correo electrónico proporcionado no es válido. Por favor, introduce una dirección de correo electrónico válida e inténtalo de nuevo.';
        }
        this.showAlert(msg);
      });
  }

  async showAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error de autenticación',
      mode: 'ios',
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  reset(event) {}
}
