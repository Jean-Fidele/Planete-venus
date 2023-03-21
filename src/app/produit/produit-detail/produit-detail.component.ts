import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/categorie/models/Categorie';
import { environment } from 'src/environment/environment';
import { Produit } from '../models/Produit';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent {

  public libelle : string | undefined;
  public CategorieName : string | undefined;
  public url_base = environment.url_base;
  
  constructor(public http: HttpClient, public routerActivate: Router, private router: ActivatedRoute){ 
    this.router.queryParams.subscribe(param=>{
      var id =  param["id"];
      this.http.get<Produit>(this.url_base + '/produit/' + id).subscribe((result) => {       
          this.CategorieName = result.categorie.libelle;
          this.libelle = result.name;
      }); 
    });
  }

  ClickRetour(){
      this.routerActivate.navigate(["/produits"]);
  };
  
}
