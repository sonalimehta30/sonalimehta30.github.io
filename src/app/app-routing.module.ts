import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  // {path: '', component: AppComponent},
  {path: '', component: DashboardComponent},
  {path: 'cart', component: CartComponent},
  {path: 'profile', component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
