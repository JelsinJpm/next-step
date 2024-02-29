import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { IonicSlides, PopoverController } from '@ionic/angular';
import { PopoverComponent } from './popover/popover.component';
import { ApiService } from 'src/app/services/api/api.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  
  loc = "Localizando..."
  banners: any[] = [];
  categories: any[] = [];
  favorites: any[] = [];
  offers: any[] = [];
  nearby: any[] = [];
  swiperModules = [IonicSlides];

  constructor( 
    public popoverController: PopoverController,
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.banners = [
      {banner: 'assets/dishes/11.jpeg'},
      {banner: 'assets/dishes/1.jpg'},
      {banner: 'assets/dishes/2.jpg'},
      {banner: 'assets/dishes/3.jpg'},
      {banner: 'assets/dishes/4.jpeg'},
    ];
    this.categories = this.api.categories;
    this.favorites = this.api.allRestaurants.filter(restaurant => restaurant.favorite === true);
    const offers = [...this.api.allRestaurants];
    this.offers = offers.sort((a,b) => parseInt(b.id) - parseInt(a.id));
    this.nearby = this.api.allRestaurants;
    //this.getCurrentLocation();
  }

 /* async getCurrentLocation(){
    try{
      const coordinates = await Geolocation.getCurrentPosition();
      console.log("Posicion:", coordinates);
      
    } catch(e){
      console.log(e);
      this.openPopover();
      
    }
  }

  openPopover(){
    const ev = {
      target:{
        getBoundingClientRect: () => {
          return {
            left: 5
          }
        }
      }
    };
    this.presentPopover(ev)
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'custom-popover',
      event: ev,
      translucent: true
    });
    await popover.present();
  
    const { data } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with data', data);
    if(data) {
      this.requestGeolocationPermission();
    } else {
      this.loc = 'Localizando...';
    }
  }

  async requestGeolocationPermission() {
    try {
      const status = await Geolocation.requestPermissions();
      console.log(status);
      if(status?.location === 'granted') this.getCurrentLocation();
      else this.loc = 'Localizando...';
    } catch(e) {
      console.log(e);
    }
  } */

  navigateToFood(id: number) {
    this.router.navigate(['foods', id]);
  }
}
