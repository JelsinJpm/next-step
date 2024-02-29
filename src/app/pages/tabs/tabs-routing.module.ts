import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [{
      path: '',
      redirectTo: '/tabs/home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    },
    {
      path: 'search',
      loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
    },
    {
      path: 'cart',
      loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
    },
    {
      path: 'orders',
      loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
    },
    {
      path: 'account',
      loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
    }
  ]
  },
  {
    path: 'restaurants/:id',
    loadChildren: () => import('./items/items.module').then( m => m.ItemsPageModule)
  },
  {
    path: 'foods/:id',
    loadChildren: () => import('./foods/foods.module').then( m => m.FoodsPageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
