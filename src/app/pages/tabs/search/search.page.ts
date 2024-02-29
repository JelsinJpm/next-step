import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  query: string | any;
  searchBtn: boolean | any;
  searchBar: boolean | any;
  categories: any[] = [];
  allRestaurants: any[] = [];
  restaurants: any[] = [];
  isLoading!: boolean;
  item = {
    // icon: 'search-outline',
    image: 'assets/images/sad.png',
    color: 'primary',
    title: '¡Lo sentimos! No se han encontrado resultados',
    // subTitle: 'No results found'
  };

  constructor() { }

  ngOnInit() {
    this.categories = [
      {id: 1, cover: 'assets/dishes/2.jpg', name: 'India'},
      {id: 2, cover: 'assets/dishes/3.jpg', name: 'Italiana'},
      {id: 8, cover: 'assets/dishes/10.jpeg', name: 'Rollos'},
      {id: 7, cover: 'assets/dishes/9.jpeg', name: 'Hamburguesas'},
      {id: 3, cover: 'assets/dishes/5.jpeg', name: 'Mexicana'},
      {id: 4, cover: 'assets/dishes/6.jpeg', name: 'Americana'},
      {id: 5, cover: 'assets/dishes/7.jpeg', name: 'China'},
      {id: 6, cover: 'assets/dishes/8.jpeg', name: 'Mariscos'},
    ];
    this.allRestaurants = [
      {
        id: '1',
        cover: 'assets/dishes/3.jpg',
        name: 'Puro sabor mexicano',
        cuisines: [
          'Italiana',
          'Mexicana'
        ],
        rating: 5,
        delivery_time: 25,
        distance: 2.5,
        price: 100
      },
      {
        id: '2',
        cover: 'assets/dishes/2.jpg',
        name: 'Nachos de Monterrey',
        cuisines: [
          'Italiana',
          'Mexicana',
          'China'
        ],
        rating: 5,
        delivery_time: 25,
        distance: 2.5,
        price: 100
      },
      {
        id: '3',
        cover: 'assets/dishes/restaurant.jpg',
        name: 'México en tu casa',
        cuisines: [
          'India',
          'Italiana',
          'Mexicana'
        ],
        rating: 5,
        delivery_time: 25,
        distance: 2.5,
        price: 100,
        latitude: 0,
        longitude: 0
      },
    ]
  }

  updateSearch(query?: any) {
    if(query) this.query = query;
    this.searchBar = true;
    // obtener datos del restaurante
    this.isLoading = true;
    setTimeout(() => {
      this.restaurants = this.allRestaurants.filter(x => { 
        return (x.name).toLowerCase().includes(this.query.toLowerCase()) 
        || x.cuisines.find((z: string) => z.toLowerCase().includes(this.query.toLowerCase()));
      });
      console.log('update restaurant data: ', this.restaurants);
      this.isLoading = false;
    }, 3000);}

  onInputQuery(){
    console.log("input query:", this.query)
    if(this.query.length > 0){
      this.searchBtn = true;
    } else {
      this.searchBtn = false;
    }
  }

  toggleSearch(val?: any) {
    if(val) {
      this.query = '';
      this.onInputQuery();
    }
    this.searchBar = !this.searchBar;
  }

}
