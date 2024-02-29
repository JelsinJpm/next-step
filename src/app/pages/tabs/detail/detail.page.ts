import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CartItem } from 'src/app/models/cart-item.model';
import { Food } from 'src/app/models/food.model';
import { ApiService } from 'src/app/services/api/api.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id: number;
  food: Food;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: ApiService,
    private cartService: CartService,
    private toastCtrl: ToastController
  ) {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.food = this.getFood(this.id);
  }

  getFood(id: number): Food {
    return this.foodService.getFoods().find((food) => food.id === id);
  }

  addItemToCart() {
    const cartitem: CartItem = {
      id: this.food.id,
      name: this.food.name,
      price: this.food.price,
      image: this.food.image,
      quantity: 1,
    };

    this.cartService.addToCart(cartitem);
    this.presentToast();
  }

  async presentToast(){
    const toast = await this.toastCtrl.create({
      message: "Producto agregado al carrito",
      mode: "ios",
      duration: 1000,
      position: "top",
      color: "dark"
    });

    toast.present();
  }
}
