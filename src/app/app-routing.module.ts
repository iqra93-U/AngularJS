import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/components/page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'',redirectTo:'/sign-in', pathMatch:'full'},

  {path:'page-not-found', component:PageNotFoundComponent},

  {
    path: '',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },

  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },
  {
    path: 'clients',
    loadChildren: () =>
      import('./clients/clients.module').then((m) => m.ClientsModule),
  },

  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes ,

    {
      preloadingStrategy : PreloadAllModules
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
