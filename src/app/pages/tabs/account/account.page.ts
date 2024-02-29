import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  options: any[] = [];

  constructor(private authService: AuthService, private router: Router, private firebaseSvc: FirebaseService,
    private utilsSvc: UtilsService) { 
  }

  ngOnInit() {
    console.log('profile ngoninit');
    this.options = [
      {title: 'Perfil', icon: 'person-outline', color: 'dark'},
      {title: 'Chat', icon: 'chatbubbles-outline', color: 'dark'},
      {title: 'Favoritos', icon: 'heart-outline', color: 'dark'},
      {title: 'Ajustes', icon: 'options-outline', color: 'dark'},
      {title: 'Notificaciones', icon: 'notifications-outline', color: 'dark'},
      {title: 'Cerrar sesión', icon: 'log-out-outline', color: 'primary', background: 'dark'},
    ];
  }

  getRows() {
    const rows = [];
    for (let i = 0; i < this.options.length; i += 3) {
      rows.push(this.options.slice(i, i + 3));
    }
    return rows;
  }

  logout(){
    this.authService.logout()
    this.router.navigateByUrl('/auth-screen', {replaceUrl: true});
  }

  user(): User{
    return this.utilsSvc.getFromLocalStorage('user')
  }

    // Tomar/Seleccionar imagen
  async takeImage(){
    let user = this.user();
    let path = `users/${user.id}`
    
    const dataUrl = (await this.utilsSvc.takePicture('Imagen de perfil')).dataUrl;
    const loading = await this.utilsSvc.loading();
    await loading.present();
    let imagePath = `${user.id}/profile`;
    user.image = await this.firebaseSvc.uploadImage(imagePath, dataUrl)

    this.firebaseSvc.updateDocument(path, {image: user.image}).then(async res => {

      this.utilsSvc.saveInLocalStorage('user', user)

      this.utilsSvc.presentToast({
        message: 'Imagen actualizada exitosamente',
        duration: 3000,
        color: 'success',
        position: 'middle',
        icon: 'checkmark-circle-outline'
      })

      console.log(res)

    }).catch(error => {
      console.log(error);
      this.utilsSvc.presentToast({
        message: error.message,
        duration: 3000,
        color: 'danger',
        position: 'middle',
        icon: 'alert-circle-outline'
      })
      
    }).finally(() => {
      loading.dismiss();
    })
  }

}
