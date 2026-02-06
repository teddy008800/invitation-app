import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/landing/landing')
        .then(m => m.Landing)
  },
  {
    path: 'invite/:slug',
    loadComponent: () =>
      import('./pages/invite/invite')
        .then(m => m.Invite)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
