import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HistroyComponent } from './histroy/histroy.component';
import { FilterComponent } from './home/filter/filter.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/auth-guard.service';
import { UserComponent } from './home/user/user.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './home/search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'history', component: HistroyComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'filter', component: FilterComponent, canActivate: [AuthGuard] },
  { path: 'search', component: SearchComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
