import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './produit/produit.component';
import { CategorieComponent } from './categorie/categorie.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CategorieDetailComponent } from './categorie/categorie-detail/categorie-detail.component';
import { CategorieEditComponent } from './categorie/categorie-edit/categorie-edit.component';
import { ProduitCreateComponent } from './produit/produit-create/produit-create.component';
import { ProduitDetailComponent } from './produit/produit-detail/produit-detail.component';
import { ProduitEditComponent } from './produit/produit-edit/produit-edit.component';
import { CategorieCreateComponent } from './categorie/categorie-create/categorie-create.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ProduitComponent,
    CategorieComponent,
    CategorieCreateComponent,
    CategorieDetailComponent,
    CategorieEditComponent,
    ProduitCreateComponent,
    ProduitDetailComponent,
    ProduitEditComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'produits', component: ProduitComponent },
      { path: 'categories', component: CategorieComponent },
      { path: 'categories/detail', component: CategorieDetailComponent, data: {id: 2} },
      { path: 'categories/create', component: CategorieCreateComponent },
      { path: 'categories/edit', component: CategorieEditComponent },

      { path: 'produits/detail', component: ProduitDetailComponent, data: {id: 2} },
      { path: 'produits/create', component: ProduitCreateComponent },
      { path: 'produits/edit', component: ProduitEditComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
