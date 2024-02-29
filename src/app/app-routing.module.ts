import { NgModule, inject } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/auth-screens/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'auth-screen',
    loadChildren: () => import('./pages/auth-screens/auth-screen/auth-screen.module').then( m => m.AuthScreenPageModule),
    canMatch: [async () => await inject(AuthService).introGuard()]
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule),
    canActivate: [async () => await inject(AuthService).authGuard()]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
