import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/categorie/models/Categorie';
import { CategorieRes } from 'src/app/categorie/models/CategorieRes';
import { environment } from 'src/environment/environment';
import { Produit } from '../models/Produit';
import { ProduitRes } from '../models/ProduitRes';

@Component({
  selector: 'app-produit-create',
  templateUrl: './produit-create.component.html',
  styleUrls: ['./produit-create.component.css']
})
export class ProduitCreateComponent {
  
  public libelle : string | undefined;
  public code : string | undefined;
  public url_base = environment.url_base;
  public categories: Categorie[] = [];

  constructor(public http: HttpClient, private router: Router){ 
    this.categories = [];
    this.http.get<CategorieRes>(this.url_base + '/categorie?page=1&&size=20').subscribe((result) => {
      for(let i = 1; i <= result.totale; i++){
        this.categories.push(result.categories[i-1]);
      }
    });
  }

  ClickCreate(){
    this.http.post<Produit>(this.url_base + '/produit', {
      name: this.libelle, categorieId: this.code
    }).subscribe((result) => {
      this.router.navigate(["/produits"]);
    });
  }
}
