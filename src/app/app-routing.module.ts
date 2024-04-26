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

const routes: Routes = [
  //Set route for url : http://localhost:4200
  { path: '', component: PageHomeComponent },
  //Set route for url : http://localhost:4200/my-plants
  { path: 'my-plants', component: PageMyPlantsComponent },
  //Set route for url : http://localhost:4200/admin -> PageAdminComponent
  { path: 'admin', component: PageAdminComponent },
  {path: 'admin/new-plant', component: PageNewPlanteComponent},
  {path: 'plant/details/:plantId', component: PagePlantDetailsComponent},
  {path: 'admin/plant/edit/:plantId', component: PageEditPlantComponent},
  {path: 'admin/categorie/edit/:categorieId', component: PageEditCategorieComponent},
  {path: 'categorie', component: CategorieComponent},
  {path: 'categorie/new-categorie', component: PageNewCategorieComponent},
  {path: 'cart', component: CartComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
