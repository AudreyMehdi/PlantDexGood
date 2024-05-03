import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageMyPlantsComponent } from './pages/page-my-plants/page-my-plants.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageNewPlanteComponent } from './pages/page-new-plante/page-new-plante.component';
import { PagePlantDetailsComponent } from './pages/page-plant-details/page-plant-details.component';
import { PageEditPlantComponent } from './pages/page-edit-plant/page-edit-plant.component';
import { CartComponent } from './components/cart/cart.component';
import { CategorieComponent } from './pages/categorie/categorie.component';
import { PageNewCategorieComponent } from './pages/page-new-categorie/page-new-categorie.component';
import { PageEditCategorieComponent } from './pages/page-edit-categorie/page-edit-categorie.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorTokenInterceptor } from './interceptor-token.interceptor';
import { AdminGuard } from './gards/admin.guard';
import { PageLoginComponent } from './pages/page-login/page-login.component';

const routes: Routes = [
  //Set route for url : http://localhost:4200
  { path: '', component: PageHomeComponent },
  {path: 'login', component: PageLoginComponent},
  //Set route for url : http://localhost:4200/my-plants
  { path: 'my-plants', component: PageMyPlantsComponent },
  //Set route for url : http://localhost:4200/admin -> PageAdminComponent
  { path: 'admin', canActivate : [AdminGuard], component: PageAdminComponent },
  {path: 'admin/new-plant', canActivate : [AdminGuard], component: PageNewPlanteComponent},
  {path: 'plant/details/:plantId', component: PagePlantDetailsComponent},
  {path: 'admin/plant/edit/:plantId', canActivate : [AdminGuard], component: PageEditPlantComponent},
  {path: 'admin/categorie/edit/:categorieId', canActivate : [AdminGuard], component: PageEditCategorieComponent},
  {path: 'categorie', canActivate : [AdminGuard],  component: CategorieComponent},
  {path: 'categorie/new-categorie', canActivate : [AdminGuard], component: PageNewCategorieComponent},
  {path: 'cart', component: CartComponent},
 
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorTokenInterceptor, multi: true }
  ],
})
export class AppRoutingModule {}
