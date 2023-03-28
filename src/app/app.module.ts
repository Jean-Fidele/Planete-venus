import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './produit/produit.component';
import { CategorieComponent } from './categorie/categorie.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CategorieDetailComponent } from './categorie/categorie-detail/categorie-detail.component';
import { CategorieEditComponent } from './categorie/categorie-edit/categorie-edit.component';
import { ProduitCreateComponent } from './produit/produit-create/produit-create.component';
import { ProduitDetailComponent } from './produit/produit-detail/produit-detail.component';
import { ProduitEditComponent } from './produit/produit-edit/produit-edit.component';
import { CategorieCreateComponent } from './categorie/categorie-create/categorie-create.component';
import { AuthInterceptorService } from './services/AuthInterceptorService';
import { LoginComponent } from './admin/login/login.component';
import { UserComponent } from './admin/user/user.component';
import { RoleComponent } from './admin/role/role.component';


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
    ProduitEditComponent,
    LoginComponent,
    UserComponent,
    RoleComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule, 
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
    
      { path: 'categories', component: CategorieComponent },
      { path: 'categories/detail', component: CategorieDetailComponent, data: {id: 2} },
      { path: 'categories/create', component: CategorieCreateComponent },
      { path: 'categories/edit', component: CategorieEditComponent },
      
      { path: 'produits', component: ProduitComponent },
      { path: 'produits/detail', component: ProduitDetailComponent, data: {id: 2} },
      { path: 'produits/create', component: ProduitCreateComponent },
      { path: 'produits/edit', component: ProduitEditComponent },
    ])
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function tokenGetter() {
  return localStorage.getItem("access_token");
}
