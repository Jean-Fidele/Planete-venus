import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './produit/produit.component';
import { CategorieComponent } from './categorie/categorie.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './categorie/detail/detail.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ProduitComponent,
    CategorieComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'produits', component: ProduitComponent },
      { path: 'categories', component: CategorieComponent },
      { path: 'categories/detail', component: DetailComponent, data: {id: 2} },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
