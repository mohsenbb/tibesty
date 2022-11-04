import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'about',
    loadChildren: () => import('about/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'accounting',
    loadChildren: () =>
      import('accounting/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'cases',
    loadChildren: () => import('cases/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'docs',
    loadChildren: () => import('docs/Module').then((m) => m.RemoteEntryModule),
  },
];
