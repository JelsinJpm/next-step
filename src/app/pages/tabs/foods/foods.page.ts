import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/models/food.model';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.page.html',
  styleUrls: ['./foods.page.scss'],
})
export class FoodsPage implements OnInit {
  categoryName: string;
  foods: Food[] = [];

  constructor(private router: Router ,private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const categoryId = +params['id']; // Asegurarse de convertir el id a número
      if (!isNaN(categoryId)) {
        this.categoryName = this.getCategoryName(categoryId);
        this.foods = this.apiService.getFoods().filter(food => food.category_id === categoryId);
      } else {
        console.error('El ID de la categoría no es un número válido.');
      }
    });
  }

  getCategoryName(categoryId: number): string {
    const category = this.apiService.categories.find(cat => cat.id === categoryId);
    return category ? category.name : '';
  }

  getFood(id: number): Food {
    return this.apiService.getFoods().find((food) => food.id === id);
  }

  goToDetailPage(id: number){
    this.router.navigate(["tabs/detail", id]);
    console.log(id);
  }

}
