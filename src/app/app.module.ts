import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageMyPlantsComponent } from './pages/page-my-plants/page-my-plants.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { CardPlantComponent } from './components/card-plant/card-plant.component';
import { FilterSideBarComponent } from './components/filter-side-bar/filter-side-bar.component';
import { SeachBarComponent } from './component/seach-bar/seach-bar.component';
import { SortBarComponent } from './components/sort-bar/sort-bar.component';
import { IconComponent } from './components/icon/icon.component';
import { IconGoutteVideComponent } from './components/icon/icon-goutte-vide/icon-goutte-vide.component';
import { IconGouttePleineComponent } from './components/icon/icon-goutte-pleine/icon-goutte-pleine.component';
import { IconSoleilVideComponent } from './components/icon/icon-soleil-vide/icon-soleil-vide.component';
import { IconSoleilPleinComponent } from './components/icon/icon-soleil-plein/icon-soleil-plein.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { PageNewPlanteComponent } from './pages/page-new-plante/page-new-plante.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PagePlantDetailsComponent } from './pages/page-plant-details/page-plant-details.component';
import { PageEditPlantComponent } from './pages/page-edit-plant/page-edit-plant.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageHomeComponent,
    PageMyPlantsComponent,
    PageAdminComponent,
    PageNotFoundComponent,
    CardPlantComponent,
    FilterSideBarComponent,
    SeachBarComponent,
    SortBarComponent,
    IconComponent,
    IconGoutteVideComponent,
    IconGouttePleineComponent,
    IconSoleilVideComponent,
    IconSoleilPleinComponent,
    FormulaireComponent,
    PageNewPlanteComponent,
    PagePlantDetailsComponent,
    PageEditPlantComponent,
    CartComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
