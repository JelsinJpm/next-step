import { Injectable } from '@angular/core';
import { Food } from 'src/app/models/food.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  allRestaurants = [
    {
      id: '1',
      cover: 'assets/dishes/chory.jpg',
      name: 'Chory Comidas Rapidas',
      cuisines: [
        'Salchipapa con todo',
        'Salchi costilla',
        'Salchi pollo',
        'Bebiddas'
      ],
      rating: 4.5,
      delivery_time: 40,
      distance: 4.3,
      price: 20,
    },
  
    {
      id: '2',
      cover: 'assets/dishes/pizza-kids.jpg',
      name: 'PIZZA Kids',
      cuisines: [
        'Pizza Pequeña',
        'Pizza Mediana',
        'Pizza Grande',
        'Bebiddas'
      ],
      rating: 4.1,
      delivery_time: 20,
      distance: 2.3,
      price: 15,
      favorite: false
    },
  
    {
      id: '3',
      cover: 'assets/dishes/doblequeso.jpg',
      name: 'DobleQueso',
      cuisines: [ /* categorias del restaurante */
        'Hamburguesa',
        'Patacones',
        'Pizza',
        'Bebidas'
      ],
      rating: 4.5,
      delivery_time: 40,
      distance: 4.3,
      price: 16,
    },
    {
      id: '4',
      cover: 'assets/dishes/Mastropiero.jpg',
      name: 'Mastropiero',
      cuisines: [ /* categorias del restaurante */
        'Pizza',
        'Sandwich',
        'Hot Dogs',
        'Bebiddas'
      ],
      rating: 4.5,
      delivery_time: 40,
      distance: 4.3,
      price: 15,
      favorite: true
    },
    {
      id: '5',
      cover: 'assets/dishes/zimarrones.jpg',
      name: 'Zimarrones',
      cuisines: [
        'Hamburguesas',
        'Salchipapas',
        'Bebidas'
      ],
      rating: 4.5,
      delivery_time: 40,
      distance: 4.3,
      price: 15,
      favorite: true
    }
  
  ];
  
  categories = [
    { id: 1, image: 'assets/dishes/carne-cat.jpg', name: 'Carnes' },
    { id: 2, image: 'assets/dishes/picadas.jpg', name: 'Picadas' },
    { id: 3, image: 'assets/dishes/sandwich.jpg', name: 'Sandwich' },
    { id: 4, image: 'assets/dishes/Hamburguesas.jpg', name: 'Hamburguesas' },
    { id: 5, image: 'assets/dishes/Hot-dogs.jpg', name: 'Hot dogs' },
    { id: 6, image: 'assets/dishes/Salchipapas.jpg', name: 'Salchipapas' },
    { id: 7, image: 'assets/dishes/Pizzas.jpg', name: 'Pizzas' },
    { id: 8, image: 'assets/dishes/Bebidas.jpg', name: 'Bebidas' },
    { id: 9, image: 'assets/dishes/Patacon1.jpg', name: 'Patacones' },
  ];
  
  allItems = [
    {
      category_id: 6,
      cover: "assets/dishes/salchipapa-queso.jpg",
      desc: "Sumérgete en la deliciosa indulgencia de nuestra Salchipapa Doble Queso, una experiencia culinaria que combina lo mejor de las papas fritas, salchichas jugosas y una doble porción de queso derretido.",
      id: "1",
      name: "Salchipapa con queso",
      price: 9.500,
      rating: 0,
      status: true,
      uid: "1",
      variation: false,
      veg: true
    },
    {
      category_id: 6,
      cover: "assets/dishes/Salchipapa-mediana-con-queso-tocineta.jpg",
      desc: "¡Sumérgete en el placer irresistible de nuestra Salchipapa Mediana con Queso y Tocineta!",
      id: "2",
      name: "Salchipapa mediana con queso y tocineta",
      price: 9.500,
      rating: 0,
      status: true,
      uid: "1",
      variation: false,
      veg: true
    },
    {
      category_id: 6,
      cover: "assets/dishes/salchi-costilla.jpg",
      desc: "¡Déjate seducir por nuestra creación culinaria única, la 'Salchi Costilla'! Este plato te transportará a una experiencia gastronómica llena de sabores intensos y jugosos. Características de esta delicia",
      id: "3",
      name: "SALCHI COSTILLA",
      price: 17.000,
      rating: 0,
      status: true,
      uid: "1",
      variation: false,
      veg: true
    },
    {
      category_id: 6,
      cover: "assets/dishes/salchipapa-pollo.jpg",
      desc: "Sumérgete en una explosión de sabores con nuestra exquisita Salchipapa de Pollo. Esta fusión única combina lo mejor de las papas, el pollo jugoso y una mezcla de ingredientes que deleitarán tu paladar.",
      id: "4",
      name: "SALCHI POLLO",
      price: 18.000,
      rating: 0,
      status: true,
      uid: "1",
      variation: false,
      veg: true
    },
    {
      category_id: 8,
      cover: "assets/dishes/gaseosas-350.jpg",
      desc: "Una botella con 350ML de gaseosa",
      id: "47",
      name: "Gaseosa",
      price: 6.000,
      rating: 0,
      status: true,
      uid: "1",
      variation: false,
      veg: true
    },
  
    /* -------------------------------------------------------------------------------------------------------- */
  
    {
      category_id: 7,
      cover: "assets/dishes/pizza-pequeña.jpg",
      desc: "Salami, peperoni, jalapeño, tomate, Mezcla de cuatro queso, Queso mozzarella, Piña",
      id: "5",
      name: "Pizza Personal",
      price: 10.000,
      rating: 0,
      status: true,
      uid: "2",
      variation: false,
      veg: true
    },
    {
      category_id: 7,
      cover: "assets/dishes/pizza-mediana.jpg",
      desc: "Hawaiana pollo BBQ, Peperoni, Tocineta, Champiñones, Finas hierbas italianas",
      id: "6",
      name: "Pizza Mediana",
      price: 19.000,
      rating: 0,
      status: true,
      uid: "2",
      variation: false,
      veg: true
    },
    {
      category_id: 7,
      cover: "assets/dishes/pizza-grande.jpg",
      desc: "Hawaiana pollo BBQ, Peperoni, Tocineta, Champiñones, Finas hierbas italianas, jalapeño, tomate, Mezcla de cuatro queso, Queso mozzarella, Piña",
      id: "7",
      name: "Pizza Grande",
      price: 30.000,
      rating: 0,
      status: true,
      uid: "2",
      variation: false,
      veg: true
    },
    
    {
      category_id: 8, 
      cover: "assets/dishes/gaseosas-350.jpg",
      desc: "Una botella con 350ML de gaseosa",
      id: "12",
      name: "Gaseosa",
      price: 6.000,
      rating: 0,
      status: true,
      uid: "2",  
      variation: false,
      veg: true
    },
  
  
    /* -------------------------------------------------------------------------------------------------------- */
    {
      category_id: 4,
      cover: "assets/dishes/hamburguesa-especial.jpg",
      desc: "Una obra maestra culinaria que deleitará tus sentidos. Con ingredientes seleccionados cuidadosamente y preparada con pasión, esta hamburguesa es mucho más que una comida",
      id: "8",
      name: "Hamburguesa Especial",
      price: 22.000,
      rating: 0,
      status: true,
      uid: "3",
      variation: false,
      veg: true
    },
    {
      category_id: 5,
      cover: "assets/dishes/perro-especial.jpg",
      desc: "Ven y disfruta de un buen perro americano acompañado de papas a la francesa y salsa de la casa.",
      id: "9",
      name: "Hot Dogs Especial",
      price: 11.000,
      rating: 0,
      status: true,
      uid: "3",
      variation: false,
      veg: true
    },
    {
      category_id: 5,
      cover: "assets/dishes/perro-huevo.jpg",
      desc: "Disfruta de un buen perro claiente acompañado de papas a la francesa y salsa de la casa.",
      id: "9",
      name: "Hot Dogs con huevo",
      price: 16.000,
      rating: 0,
      status: true,
      uid: "3",
      variation: false,
      veg: true
    },
    {
      category_id: 9,
      cover: "assets/dishes/patacones.jpg",
      desc: "Sandwich de patacones con queso, tocinetas y papa",
      id: "10",
      name: "Sandwich de Patacon",
      price: 25.000,
      rating: 0,
      status: true,
      uid: "3",
      variation: false,
      veg: true
    },
    {
      category_id: 9,
      cover: "assets/dishes/patacon-1.jpg",
      desc: "Sandwich de patacones con queso, tocinetas y papa",
      id: "10",
      name: "Sandwich de Patacon",
      price: 25.000,
      rating: 0,
      status: true,
      uid: "3",
      variation: false,
      veg: true
    },
  
    {
      category_id: 8,
      cover: "assets/dishes/gaseosas-350.jpg",
      desc: "Una botella con 350ML de gaseosa",
      id: "11",
      name: "Gaseosa",
      price: 6.000,
      rating: 0,
      status: true,
      uid: "3",
      variation: false,
      veg: true
    },
  
    {
      category_id: 8, 
      cover: "assets/dishes/salchipapa-pollo.jpg",
      desc: "Limonada, Mandarina, Naranja, Maracuyá, mora", /* YA LA CREE */
      id: "43",
      name: "Jugos Naturales en Agua",
      price: 7.500,
      rating: 0,
      status: true,
      uid: "4",  
      variation: false,
      veg: true
    },
    
    {
      category_id: 8, 
      cover: "assets/dishes/salchipapa-pollo.jpg",
      desc: "Limonada, Mandarina, Guayaba, Guanabana, mora",
      id: "44",
      name: "Jugos Naturales en Leche",
      price: 8.500,
      rating: 0,
      status: true,
      uid: "4",  
      variation: false,
      veg: true
    },
    
    {
      category_id: 8, 
      cover: "assets/dishes/salchipapa-pollo.jpg",
      desc: "Un vaso de Limonada de cereza",
      id: "45",
      name: "Limonada Cerezada",
      price: 10.000,
      rating: 0,
      status: true,
      uid: "4",  
      variation: false,
      veg: true
    },
    
    {
      category_id: 8, 
      cover: "assets/dishes/salchipapa-pollo.jpg",
      desc: "Un vaso de Milo con leche",
      id: "46",
      name: "Milo",
      price: 10.000,
      rating: 0,
      status: true,
      uid: "4",  
      variation: false,
      veg: true
    },
    
    {
      category_id: 8, 
      cover: "assets/dishes/salchipapa-pollo.jpg",
      desc: "Una botella con 350ML de gaseosa",
      id: "47",
      name: "Gaseosa",
      price: 6.000,
      rating: 0,
      status: true,
      uid: "4",  
      variation: false,
      veg: true
    },
  
    {
      category_id: 6, 
      cover: "assets/dishes/Salchipapa-Especial.jpg",
      desc: "Servida con papas ala francesa, salchicha tipo ranchera y salsa rosada de la casa",
      id: "48",
      name: "Salchipapa Sencilla",
      price: 25.000,
      rating: 0,
      status: true,
      uid: "4",  
      variation: false,
      veg: true
    },
  
    {
      category_id: 6, 
      cover: "assets/dishes/Salchipapa-Suprema.jpg",
      desc: "Servida con papas a la francesa, salchicha tipo ranchera, tocineta, huevo de codorniz, salsa rosada de la casa y queso mozzarella",
      id: "49",
      name: "Salchipapa Especial",
      price: 35.000,
      rating: 0,
      status: true,
      uid: "4",  
      variation: false,
      veg: true
    },
    {
      category_id: 6, 
      cover: "assets/dishes/salchipapa-pollo.jpg",
      desc: "Servida con papas a la francesa, salchicha tipo ranchera, carne desmechada y crotones de platano maduro, salsa rosada de la casa y queso mozzarella",
      id: "50",
      name: "Salchipapa Mixta",
      price: 10.00,
      rating: 0,
      status: true,
      uid: "4",  
      variation: false,
      veg: true
    },
    {
      category_id: 6, 
      cover: "assets/dishes/Salchipapa-Suprema.jpg",
      desc: "Servida con papas a la francesa, salchicha tipo ranchera, pollo desmechado, maicitos, salsa de ajo artesanal y queso mozzarela",
      id: "51",
      name: "Salchipapa Suprema",
      price: 35.000,
      rating: 0,
      status: true,
      uid: "4",  
      variation: false,
      veg: true
    },
  
  
    {
      category_id: 5, 
      cover: "assets/dishes/Hot-dogs-Parma.jpg",
      desc: "Pan tradicional pqueño, salchicha tipo americana asada, tocineta lechuga, tomate, salsa y queso mozzarella gratinado",
      id: "52",
      name: "Hot dogs Turin",
      price: 14.000,
      rating: 0,
      status: true,
      uid: "4",  
      variation: false,
      veg: true
    },
    {
      category_id: 5, 
      cover: "assets/dishes/Hot-dogs-Parma.jpg",
      desc: "Pan tradicional, salchicha tipo americana, asada, lechuga, tomate, salsa y queso mozzarella gratinado",
      id: "53",
      name: "Hot dogs Cerdeña",
      price: 18.000,
      rating: 0,
      status: true,
      uid: "4",  
      variation: false,
      veg: true
    },
    {
      category_id: 5, 
      cover: "assets/dishes/Hot-dogs-Parma.jpg",
      desc: "Pan tradicional, salchicha tipo americana, tocineta, lechuga, tomate, salsa y queso mozzarella gratinado",
      id: "54",
      name: "Hot dogs Bolzano",
      price: 19.000,
      rating: 0,
      status: true,
      uid: "4",  
      variation: false,
      veg: true
    },
  
    {
      category_id: 5, 
      cover: "assets/dishes/Hot-dogs-Parma.jpg",
      desc: "Pan tradicional, salchicha tipo americana, asada, jamon, tocineta, papas en fosforitos, salsa y queso mozzarella gratinado",
      id: "55",
      name: "Hot dogs Parma",
      price: 19.500,
      rating: 0,
      status: true,
      uid: "4",  
      variation: false,
      veg: true
    },
  
    {
      category_id: 5, 
      cover: "assets/dishes/Hot-dogs-Prato.jpg",
      desc: "Pan tradicional, salchicha tipo americana, asada, tocineta, piña de la casa, lechuga, tomate, salsa y queso mozzarella gratinado",
      id: "56",
      name: "Hot dogs Venecia",
      price: 19.000,
      rating: 0,
      status: true,
      uid: "4",  
      variation: false,
      veg: true
    },
  
    {
      category_id: 5, 
      cover: "assets/dishes/Hot-dogs-Prato.jpg",
      desc: "Pan tradicional, chorizo de ternera asado, tocineta, lechuga, tomate, cebolla homeada salsa y queso mozzarella gratinado",
      id: "57",
      name: "Hot dogs Florencia",
      price: 19.000,
      rating: 0,
      status: true,
      uid: "4",  
      variation: false,
      veg: true
    },
  
    {
      category_id: 5, 
      cover: "assets/dishes/Hot-dogs-Prato.jpg",
      desc: "Pan tradicional, jugosa carne desmechada con maicito, tocineta, jalapeños, lechuga, tomates asados, salsa de guacamole y queso mozzarella gratinado",
      id: "58",
      name: "Hot dogs Prato",
      price: 20.500,
      rating: 0,
      status: true,
      uid: "4",  
      variation: false,
      veg: true
    },
  
    {
      category_id: 4, 
      cover: "assets/dishes/carne-cat.jpg",
      desc: "140g de carne de res artesanal, tocineta, jamon, queso mozzarella cebolla horneada, lechuga, rojadas de tomate y salsas",
      id: "59",
      name: "Hamburguesa Torino",
      price: 20.500,
      rating: 0,
      status: true,
      uid: "4",  
      variation: false,
      veg: true
    },
    {
      category_id: 4, 
      cover: "assets/dishes/carne-cat.jpg",
      desc: "200g de carne de res artesanal, jamon, queso mozzarella cebolla horneada, lechuga, rojadas de tomate y salsas",
      id: "60",
      name: "Hamburguesa Napoles",
      price: 23.500,
      rating: 0,
      status: true,
      uid: "4",  
      variation: false,
      veg: true
    },
  
    {
      category_id: 4, 
      cover: "assets/dishes/carne-cat.jpg",
      desc: "200g de carne de res artesanal, tocineta, jamon, queso mozzarella cebolla horneada, lechuga, rojadas de tomate y salsas",
      id: "61",
      name: "Hamburguesa Siena",
      price: 25.500,
      rating: 0,
      status: true,
      uid: "4",  
      variation: false,
      veg: true
    },
  
    {
      category_id: 4, 
      cover: "assets/dishes/Hamburguesas.jpg",
      desc: "200g de pechuga de pollo a la plancha, tocineta, jamon, queso mozzarella cebolla horneada, lechuga, rojadas de tomate y salsas",
      id: "62",
      name: "Hamburguesa Liborno",
      price: 25.500,
      rating: 0,
      status: true,
      uid: "4",  
      variation: false,
      veg: true
    },
  
    {
      category_id: 4, 
      cover: "assets/dishes/Hamburguesas.jpg",
      desc: "150g de carne desmechada, tocineta, aros de cebolla crocantes, queso amarillo, lechuga, rojadas de tomate y salsas",
      id: "63",
      name: "Hamburguesa Verona",
      price: 25.500,
      rating: 0,
      status: true,
      uid: "4",  
      variation: false,
      veg: true
    },
  
    {
      category_id: 4, 
      cover: "assets/dishes/Hamburguesas.jpg",
      desc: "200g de carne de res artesanal, tocineta, queso mozzarella, aros de cebolla crocantes glaseados en queso cremas con pimientos dulces, lechuga, rojadas de tomate y salsa de ajo de la casa",
      id: "64",
      name: "Hamburguesa Brescia",
      price: 25.500,
      rating: 0,
      status: true,
      uid: "4",  
      variation: false,
      veg: true
    },
  
  
    {
      category_id: 3, 
      cover: "assets/dishes/Sandwich.jpg",
      desc: "Servido con jamon, queso mozzarella, lechuga, rodajas de tomate y salsa, acompañados de papas a la francesa.",
      id: "65",
      name: "Sandwich Sencillo",
      price: 18.000,
      rating: 0,
      status: true,
      uid: "4",  
      variation: false,
      veg: true
    },
  
    {
      category_id: 3, 
      cover: "assets/dishes/Sandwich.jpg",
      desc: "Servido con jamon, tocineta, queso, lechuga, rodajas de tomate y salsa, acompañados de papas a la francesa.",
      id: "66",
      name: "Sandwich Especial",
      price: 22.000,
      rating: 0,
      status: true,
      uid: "4",  
      variation: false,
      veg: true
    },
  
    {
      category_id: 3, 
      cover: "assets/dishes/pollo-desmechado.jpg",
      desc: "Tipo cubano servido con pollo desmechado, tocineta, jamon, salchicha tipo ranchera, chorizo, maicito, queso mozzarella, cebolla horneada, rodajas de tomate, salsa de maiz y ajo acompañado por papas a la francesa",
      id: "67",
      name: "Sandwich Mastropiero",
      price: 36.500,
      rating: 0,
      status: true,
      uid: "4",  
      variation: false,
      veg: true
    },
  
    {
      category_id: 2, 
      cover: "assets/dishes/carne-cat.jpg",
      desc: "Servida con carne de cerdo, res, costillas horneadas, morcilla, chorizo, salchicha tipo ranchera y butifarra, acompañados de patacon y papas a la francesa",
      id: "68",
      name: "Picada Pequeña",
      price: 70.000,
      rating: 0,
      status: true,
      uid: "4",  
      variation: false,
      veg: true
    },
  
    {
      category_id: 2, 
      cover: "assets/dishes/carne-cat.jpg",
      desc: "Servida con carne de cerdo, res, costillas horneadas, morcilla, chorizo, salchicha tipo ranchera y butifarra, acompañados de patacon y papas a la francesa",
      id: "68",
      name: "Picada Mediana",
      price: 82.000,
      rating: 0,
      status: true,
      uid: "4",  
      variation: false,
      veg: true
    },
  
    {
      category_id: 2, 
      cover: "assets/dishes/carne-cat.jpg",
      desc: "Servida con carne de cerdo, res, costillas horneadas, morcilla, chorizo, salchicha tipo ranchera y butifarra, acompañados de patacon y papas a la francesa",
      id: "68",
      name: "Picada Grande",
      price: 95.000,
      rating: 0,
      status: true,
      uid: "4",  
      variation: false,
      veg: true
    },
  
  
    {
      category_id: 1, 
      cover: "assets/dishes/salchipapa-pollo.jpg",
      desc: "300g de corte grueso con termino a eleccion, acompañado de pure de platano gratinado y papas a la francesa",
      id: "69",
      name: "Solomito",
      price: 40.500,
      rating: 0,
      status: true,
      uid: "4",  
      variation: false,
      veg: true
    },
  
    {
      category_id: 1, 
      cover: "assets/dishes/salchipapa-pollo.jpg",
      desc: "300g bañadas en salsa BBQ maple de la casa, acompañadas de papas a la francesa y patacon con queso crema",
      id: "70",
      name: "Costillas Horneadas",
      price: 40.500,
      rating: 0,
      status: true,
      uid: "4",  
      variation: false,
      veg: true
    },
  
    {
      category_id: 1, 
      cover: "assets/dishes/salchipapa-pollo.jpg",
      desc: "250g de pollo a la plancha, servida con papas a la francesa y patacon con queso cremas",
      id: "71",
      name: "Pechuga de Pollo",
      price: 40.500,
      rating: 0,
      status: true,
      uid: "4",  
      variation: false,
      veg: true
    },
  
    {
      category_id: 1, 
      cover: "assets/dishes/salchipapa-pollo.jpg",
      desc: "250g de carne a la plancha, eleccion, servida con papas a la  francesa y patacon con queso cremas",
      id: "72",
      name: "Carne de Cerdo/Res",
      price: 40.500,
      rating: 0,
      status: true,
      uid: "2",  
      variation: false,
      veg: true
    },
  
    {
      category_id: 1, 
      cover: "assets/dishes/salchipapa-pollo.jpg",
      desc: "130g de carne a la plancha eleccion, servida con papas a la francesa y patacon con queso crema",
      id: "73",
      name: "Porcion de Cerdo-Res",
      price: 25.000,
      rating: 0,
      status: true,
      uid: "2",  
      variation: false,
      veg: true
    },
  
    {
      category_id: 1, 
      cover: "assets/dishes/salchipapa-pollo.jpg",
      desc: "Dos cortes de 130g c/u de carne a la plancha (cerdo-pollo-res), servida con papas a la francesa y patacon con queso crema",
      id: "74",
      name: "Mixtas de dos Carnes",
      price: 47.000,
      rating: 0,
      status: true,
      uid: "2",  
      variation: false,
      veg: true
    },
  
    {
      category_id: 1, 
      cover: "assets/dishes/salchipapa-pollo.jpg",
      desc: "Tres cortes de 130g c/u de tres tipos carne a la plancha (cerdo-pollo-res), servida con papas a la francesa y patacon con queso crema",
      id: "75",
      name: "Mixta de tres Carnes",
      price: 62.000,
      rating: 0,
      status: true,
      uid: "2",  
      variation: false,
      veg: true
    },
  
    {
      category_id: 1, 
      cover: "assets/dishes/salchipapa-pollo.jpg",
      desc: "Acaompañado con porcion de salchicha tipo ranchera, papas a la francesa y patacon con queso crema",
      id: "76",
      name: "Chuzo de Pollo",
      price: 25.500,
      rating: 0,
      status: true,
      uid: "1",  
      variation: false,
      veg: true
    },
  
    {
      category_id: 1, 
      cover: "assets/dishes/salchipapa-pollo.jpg",
      desc: "200g de carne molida de res, acompañada con porcion de salchicha tipo ranchera, papas a la francesa y patacon con queso crema",
      id: "77",
      name: "Carne Artesanal",
      price: 22.000,
      rating: 0,
      status: true,
      uid: "1",  
      variation: false,
      veg: true
    },
  
  
  
  ];
  
  getFoods(): Food[]{ /*  */
    return [
      {
        category_id: 1, 
        image: "assets/dishes/solomito.png",
        desc: "300g de corte grueso con termino a eleccion, acompañado de pure de platano gratinado y papas a la francesa",
        id: 68,
        name: "Solomito",
        price: 40.500,
        uid: 4 
       
      },
    
      {
        category_id: 1, 
        image: "assets/dishes/costillas.png",
        desc: "300g bañadas en salsa BBQ maple de la casa, acompañadas de papas a la francesa y patacon con queso crema",
        id: 69,
        name: "Costillas Horneadas",
        price: 40.500,
        uid: 4  
      },
    
      {
        category_id: 1, 
        image: "assets/dishes/pechuga-pollo.png",
        desc: "250g de pollo a la plancha, servida con papas a la francesa y patacon con queso cremas",
        id: 70,
        name: "Pechuga de Pollo",
        price: 40.500,
        uid: 4  
      },
    
      {
        category_id: 1, 
        image: "assets/dishes/carne.png",
        desc: "250g de carne a la plancha, eleccion, servida con papas a la  francesa y patacon con queso cremas",
        id: 71,
        name: "Carne de Cerdo/Res",
        price: 40.500,
        uid: 2  
    
      },
      {
        category_id: 1, 
        image: "assets/dishes/carne.png",
        desc: "130g de carne a la plancha eleccion, servida con papas a la francesa y patacon con queso crema",
        id: 72,
        name: "Porcion de Cerdo-Res",
        price: 25.000,
        uid: 2
      },
      {
        category_id: 1, 
        image: "assets/dishes/carne.png",
        desc: "Dos cortes de 130g c/u de carne a la plancha (cerdo-pollo-res), servida con papas a la francesa y patacon con queso crema",
        id: 74,      
        name: "Mixtas de dos Carnes",
        price: 47.000,
        uid: 2
      },
      {
        category_id: 1, 
        image: "assets/dishes/carne.png",
        desc: "Tres cortes de 130g c/u de tres tipos carne a la plancha (cerdo-pollo-res), servida con papas a la francesa y patacon con queso crema",
        id: 75,
        name: "Mixta de tres Carnes",
        price: 62.000,
        uid: 2
      },
      {
        category_id: 1, 
        image: "assets/dishes/carne.png",
        desc: "Acaompañado con porcion de salchicha tipo ranchera, papas a la francesa y patacon con queso crema",
        id: 76,
        name: "Chuzo de Pollo",
        price: 25.500,
        uid: 1
      },
      {
        category_id: 1, 
        image: "assets/dishes/carne.png",
        desc: "200g de carne molida de res, acompañada con porcion de salchicha tipo ranchera, papas a la francesa y patacon con queso crema",
        id: 77,
        name: "Carne Artesanal",
        price: 22.000,
        uid: 1
      },
      {
        category_id: 2, 
        image: "assets/dishes/picadas.png",
        desc: "Servida con carne de cerdo, res, costillas horneadas, morcilla, chorizo, salchicha tipo ranchera y butifarra, acompañados de patacon y papas a la francesa",
        id: 68,
        name: "Picada Pequeña",
        price: 70.000,
        uid: 4
      },
      {
        category_id: 2, 
        image: "assets/dishes/picadas.png",
        desc: "Servida con carne de cerdo, res, costillas horneadas, morcilla, chorizo, salchicha tipo ranchera y butifarra, acompañados de patacon y papas a la francesa",
        id: 68,
        name: "Picada Mediana",
        price: 82.000,
        uid: 4
      },
      {
        category_id: 2, 
        image: "assets/dishes/picadas.png",
        desc: "Servida con carne de cerdo, res, costillas horneadas, morcilla, chorizo, salchicha tipo ranchera y butifarra, acompañados de patacon y papas a la francesa",
        id: 68,
        name: "Picada Grande",
        price: 95.000,
        uid: 4
      },
      {
        category_id: 3, 
        image: "assets/dishes/sandwich.png",
        desc: "Servido con jamon, queso mozzarella, lechuga, rodajas de tomate y salsa, acompañados de papas a la francesa.",
        id: 65,
        name: "Sandwich Sencillo",
        price: 18.000,
        uid: 4
      },
    
      {
        category_id: 3, 
        image: "assets/dishes/sandwich.png",
        desc: "Servido con jamon, tocineta, queso, lechuga, rodajas de tomate y salsa, acompañados de papas a la francesa.",
        id: 66,
        name: "Sandwich Especial",
        price: 22.000,
        uid: 4
      },
    
      {
        category_id: 3, 
        image: "assets/dishes/sandwich.png",
        desc: "Tipo cubano servido con pollo desmechado, tocineta, jamon, salchicha tipo ranchera, chorizo, maicito, queso mozzarella, cebolla horneada, rodajas de tomate, salsa de maiz y ajo acompañado por papas a la francesa",
        id: 67,
        name: "Sandwich Mastropiero",
        price: 36.500,
        uid: 4
      },
      {
        category_id: 6,
        image: "assets/dishes/Salchipapas.png",
        desc: "Sumérgete en la deliciosa indulgencia de nuestra Salchipapa Doble Queso, una experiencia culinaria que combina lo mejor de las papas fritas, salchichas jugosas y una doble porción de queso derretido.",
        id: 1,
        name: "Salchipapa con queso",
        price: 9.500,
        uid: 1
       
      },
      {
        category_id: 6,
        image: "assets/dishes/Salchipapas.png",
        desc: "¡Sumérgete en el placer irresistible de nuestra Salchipapa Mediana con Queso y Tocineta!",
        id: 2,
        name: "Salchipapa mediana con queso y tocineta",
        price: 9.500,
        uid: 1
       
      },
      {
        category_id: 6,
        image: "assets/dishes/Salchipapas.png",
        desc: "¡Déjate seducir por nuestra creación culinaria única, la 'Salchi Costilla'! Este plato te transportará a una experiencia gastronómica llena de sabores intensos y jugosos. Características de esta delicia",
        id: 3,
        name: "SALCHI COSTILLA",
        price: 17.000,
        uid: 1
       
      },
      {
        category_id: 6,
        image: "assets/dishes/Salchipapas.png",
        desc: "Sumérgete en una explosión de sabores con nuestra exquisita Salchipapa de Pollo. Esta fusión única combina lo mejor de las papas, el pollo jugoso y una mezcla de ingredientes que deleitarán tu paladar.",
        id: 4,
        name: "SALCHI POLLO",
        price: 18.000,
        uid: 1
       
      },
      {
        category_id: 8,
        image: "assets/dishes/gaseosas-350.png",
        desc: "Una botella con 350ML de gaseosa",
        id: 47,
        name: "Gaseosa",
        price: 6.000,
        uid: 1
       
      },
      {
        category_id: 7,
        image: "assets/dishes/pizza.png",
        desc: "Salami, peperoni, jalapeño, tomate, Mezcla de cuatro queso, Queso mozzarella, Piña",
        id: 5,
        name: "Pizza Personal",
        price: 10.000,
        uid: 2
       
      },
      {
        category_id: 7,
        image: "assets/dishes/pizza.png",
        desc: "Hawaiana pollo BBQ, Peperoni, Tocineta, Champiñones, Finas hierbas italianas",
        id: 6,
        name: "Pizza Mediana",
        price: 19.000,
        uid: 2,
       
      },
      {
        category_id: 7,
        image: "assets/dishes/pizza.png",
        desc: "Hawaiana pollo BBQ, Peperoni, Tocineta, Champiñones, Finas hierbas italianas, jalapeño, tomate, Mezcla de cuatro queso, Queso mozzarella, Piña",
        id: 7,
        name: "Pizza Grande",
        price: 30.000,
        uid: 2
       
      },
      {
        category_id: 8, 
        image: "assets/dishes/gaseosas-350.png",
        desc: "Una botella con 350ML de gaseosa",
        id: 12,
        name: "Gaseosa",
        price: 6.000,
        uid: 2  
       
      }, 
      {
        category_id: 4,
        image: "assets/dishes/hamburguesa.png",
        desc: "Una obra maestra culinaria que deleitará tus sentidos. Con ingredientes seleccionados cuidadosamente y preparada con pasión, esta hamburguesa es mucho más que una comida",
        id: 8,
        name: "Hamburguesa Especial",
        price: 22.000,
        uid: 3
       
      },
      {
        category_id: 5,
        image: "assets/dishes/perros.png",
        desc: "Ven y disfruta de un buen perro americano acompañado de papas a la francesa y salsa de la casa.",
        id: 9,
        name: "Hot Dogs Especial",
        price: 11.000,
        uid: 3,
       
      },
     {
        category_id: 5,
        image: "assets/dishes/perros.png",
        desc: "Disfruta de un buen perro claiente acompañado de papas a la francesa y salsa de la casa.",
        id: 1,
        name: "Hot Dogs con huevo",
        price: 16.000,
        uid: 3
       
      },
      {
        category_id: 9,
        image: "assets/dishes/patacones.png",
        desc: "Sandwich de patacones con queso, tocinetas y papa",
        id: 10,
        name: "Sandwich de Patacon",
        price: 25.000,
        uid: 3
       
      },
    
      {
        category_id: 8,
        image: "assets/dishes/gaseosas-350.png",
        desc: "Una botella con 350ML de gaseosa",
        id: 11,
        name: "Gaseosa",
        price: 6.000,
        uid: 3 
         },
      {
        category_id: 8, 
        image: "assets/dishes/salchipapa-pollo.jpg",
        desc: "Limonada, Mandarina, Naranja, Maracuyá, mora", /* YA LA CREE */
        id: 43,
        name: "Jugos Naturales en Agua",
        price: 7.500,
        uid: 4  
       
      },
      
      {
        category_id: 8, 
        image: "assets/dishes/salchipapa-pollo.jpg",
        desc: "Limonada, Mandarina, Guayaba, Guanabana, mora",
        id: 44,
        name: "Jugos Naturales en Leche",
        price: 8.500,
        uid: 4 
       
      },
      
      {
        category_id: 8, 
        image: "assets/dishes/salchipapa-pollo.jpg",
        desc: "Un vaso de Limonada de cereza",
        id: 45,
        name: "Limonada Cerezada",
        price: 10.000,
        uid: 4  
       
      },
      
      {
        category_id: 8, 
        image: "assets/dishes/salchipapa-pollo.jpg",
        desc: "Un vaso de Milo con leche",
        id: 46,
        name: "Milo", 
        price: 10.000,
        uid: 4
       
      },
      
      {
        category_id: 8, 
        image: "assets/dishes/salchipapa-pollo.jpg",
        desc: "Una botella con 350ML de gaseosa",
        id: 47,
        name: "Gaseosa",
        price: 6.000,
        uid: 4  
       
      },
    
      {
        category_id: 6, 
        image: "assets/dishes/salchipapa-pollo.jpg",
        desc: "Servida con papas ala francesa, salchicha tipo ranchera y salsa rosada de la casa",
        id: 48,
        name: "Salchipapa Sencilla",
        price: 25.000,
        uid: 4  
       
      },
    
      {
        category_id: 6, 
        image: "assets/dishes/salchipapa-pollo.jpg",
        desc: "Servida con papas a la francesa, salchicha tipo ranchera, tocineta, huevo de codorniz, salsa rosada de la casa y queso mozzarella",
        id: 49,
        name: "Salchipapa Especial",
        price: 35.000,
        uid: 4 
       
      },
      {
        category_id: 6, 
        image: "assets/dishes/salchipapa-pollo.jpg",
        desc: "Servida con papas a la francesa, salchicha tipo ranchera, carne desmechada y crotones de platano maduro, salsa rosada de la casa y queso mozzarella",
        id: 50,
        name: "Salchipapa Mixta",
        price: 10.00,
        uid: 4
       
      },
      {
        category_id: 6, 
        image: "assets/dishes/salchipapa-pollo.jpg",
        desc: "Servida con papas a la francesa, salchicha tipo ranchera, pollo desmechado, maicitos, salsa de ajo artesanal y queso mozzarela",
        id: 51,
        name: "Salchipapa Suprema",
        price: 35.000,
        uid: 4  
       
      },
    
    
      {
        category_id: 5, 
        image: "assets/dishes/salchipapa-pollo.jpg",
        desc: "Pan tradicional pqueño, salchicha tipo americana asada, tocineta lechuga, tomate, salsa y queso mozzarella gratinado",
        id: 52,
        name: "Hot dogs Turin",
        price: 14.000,
        uid: 4  
       
      },
      {
        category_id: 5, 
        image: "assets/dishes/salchipapa-pollo.jpg",
        desc: "Pan tradicional, salchicha tipo americana, asada, lechuga, tomate, salsa y queso mozzarella gratinado",
        id: 53,
        name: "Hot dogs Cerdeña",
        price: 18.000,
        uid: 4
       
      },
      {
        category_id: 5, 
        image: "assets/dishes/salchipapa-pollo.jpg",
        desc: "Pan tradicional, salchicha tipo americana, tocineta, lechuga, tomate, salsa y queso mozzarella gratinado",
        id: 54,
        name: "Hot dogs Bolzano",
        price: 19.000,
        uid: 4
       
      },
    
      {
        category_id: 5, 
        image: "assets/dishes/salchipapa-pollo.jpg",
        desc: "Pan tradicional, salchicha tipo americana, asada, jamon, tocineta, papas en fosforitos, salsa y queso mozzarella gratinado",
        id: 55,
        name: "Hot dogs Parma",
        price: 19.500,
        uid: 4  
       
      },
    
      {
        category_id: 5, 
        image: "assets/dishes/salchipapa-pollo.jpg",
        desc: "Pan tradicional, salchicha tipo americana, asada, tocineta, piña de la casa, lechuga, tomate, salsa y queso mozzarella gratinado",
        id: 56,
        name: "Hot dogs Venecia",
        price: 19.000,
        uid: 4  
       
      },
    
      {
        category_id: 5, 
        image: "assets/dishes/salchipapa-pollo.jpg",
        desc: "Pan tradicional, chorizo de ternera asado, tocineta, lechuga, tomate, cebolla homeada salsa y queso mozzarella gratinado",
        id: 57,
        name: "Hot dogs Florencia",
        price: 19.000,
        uid: 4  
       
      },
    
      {
        category_id: 5, 
        image: "assets/dishes/salchipapa-pollo.jpg",
        desc: "Pan tradicional, jugosa carne desmechada con maicito, tocineta, jalapeños, lechuga, tomates asados, salsa de guacamole y queso mozzarella gratinado",
        id: 58,
        name: "Hot dogs Prato",
        price: 20.500,
        uid: 4 
       
      },
    
      {
        category_id: 4, 
        image: "assets/dishes/Hamburguesas.png",
        desc: "140g de carne de res artesanal, tocineta, jamon, queso mozzarella cebolla horneada, lechuga, rojadas de tomate y salsas",
        id: 59,
        name: "Hamburguesa Torino",
        price: 20.500,
        uid: 4  
       
      },
      {
        category_id: 4, 
        image: "assets/dishes/Hamburguesas.png",
        desc: "200g de carne de res artesanal, jamon, queso mozzarella cebolla horneada, lechuga, rojadas de tomate y salsas",
        id: 60,
        name: "Hamburguesa Napoles",
        price: 23.500,
        uid: 4  
       
      },
    
      {
        category_id: 4,
        image: "assets/dishes/Hamburguesas.png",
        desc: "200g de carne de res artesanal, tocineta, jamon, queso mozzarella cebolla horneada, lechuga, rojadas de tomate y salsas",
        id: 61,
        name: "Hamburguesa Siena",
        price: 25.500,
        uid: 4  
       
      },
    
      {
        category_id: 4,
        image: "assets/dishes/Hamburguesas.png",
        desc: "200g de pechuga de pollo a la plancha, tocineta, jamon, queso mozzarella cebolla horneada, lechuga, rojadas de tomate y salsas",
        id: 62,
        name: "Hamburguesa Liborno",
        price: 25.500,
        uid: 4  
       
      },
    
      {
        category_id: 4,
        image: "assets/dishes/Hamburguesas.png",
        desc: "150g de carne desmechada, tocineta, aros de cebolla crocantes, queso amarillo, lechuga, rojadas de tomate y salsas",
        id: 63,
        name: "Hamburguesa Verona",
        price: 25.500,
        uid: 4 
       
      },
    
      {
        category_id: 4,
        image: "assets/dishes/Hamburguesas.png",
        desc: "200g de carne de res artesanal, tocineta, queso mozzarella, aros de cebolla crocantes glaseados en queso cremas con pimientos dulces, lechuga, rojadas de tomate y salsa de ajo de la casa",
        id: 64,
        name: "Hamburguesa Brescia",
        price: 25.500,
        uid: 4
       
      }
     
    ]
  }
 /* getFoods(): Food[]{
    return [
      {
        category_id: 1,
        image: "assets/dishes/hamburguesa.png",
        desc: "Un plato indio incluye paneer y una salsa sabrosa y de excelente sabor.",
        id: 1,
        name: "Hamburguesa",
        price: 25.000,
        uid: 1
      },
      {
        category_id: 4,
        image: "assets/dishes/hamburguesa.png",
        desc: "Genial en sabor",
        id: 2,
        name: "Hamburguesa 2",
        price: 20.000,
        uid: 1
      },
      {
          category_id: 2,
          image: "assets/dishes/hamburguesa.png",
          desc: "Genial en sabor",
          id: 3,
          name: "Hamburguesa 3",
          price: 15.000,
          uid: 1,
      },
      {
          category_id: 1,
          image: "assets/dishes/hamburguesa.png",
          desc: "Genial en sabor",
          id: 4,
          name: "Hamburguesa 4",
          price: 20.000,
          uid: 1,
      },
      {
          category_id: 2,
          image: "assets/dishes/hamburguesa.png",
          desc: "Genial en sabor",
          id: 5,
          name: "Hamburguesa 5",
          price: 25.000,
          uid: 1,
      },    
      {
        category_id: 3,
        image: "assets/dishes/hamburguesa.png",
        desc: "Genial en sabor",
        id: 6,
        name: "Hamburguesa 6",
        price: 16.000,
        uid: 1,
      },
      {
          category_id: 3,
          image: "assets/dishes/hamburguesa.png",
          desc: "Genial en sabor",
          id: 7,
          name: "Hamburguesa 7",
          price: 20.000,
          uid: 1,
      },
      {
          category_id: 5,
          image: "assets/dishes/hamburguesa.png",
          desc: "Genial en sabor",
          id: 8,
          name: "Hamburguesa 8",
          price: 60.000,
          uid: 1,
      },
      {
        category_id: 5,
        image: "assets/dishes/hamburguesa.png",
        desc: "Genial en sabor",
        id: 9,
        name: "Hamburguesa 9",
        price: 39.000,
        uid: 1,
      },
      {
        category_id: 4,
        image: "assets/dishes/hamburguesa.png",
        desc: "Genial en sabor",
        id: 10,
        name: "Hamburguesa 10",
        price: 12.000,
        uid: 1,
      },
      {
        category_id: 5,
        image: "assets/dishes/hamburguesa.png",
        desc: "El excelente panecillo mexicano incluye mayonesa, pimiento, hojas y muchas verduras.",
        id: 11,
        name: "Hamburguesa 11",
        price: 12.000,
        uid: 1,
      },
    ]
  } */

  getFoodsByCategory(categoryId: number): Food[] {
    return this.getFoods().filter(food => food.category_id === categoryId);
  }

  constructor() { }
}
