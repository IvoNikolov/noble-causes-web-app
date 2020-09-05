import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CausesComponent } from './pages/causes/causes.component';

const routes: Routes = [
  {path: '',  component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'causes', component: CausesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
