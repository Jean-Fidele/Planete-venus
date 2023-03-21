import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environment/environment';
import { Categorie } from '../models/Categorie';

@Component({
  selector: 'app-categorie-detail',
  templateUrl: './categorie-detail.component.html',
  styleUrls: ['./categorie-detail.component.css']
})
export class CategorieDetailComponent {
  public code: number = 1;
  public libelle: string | undefined;
  public categorie: Categorie | undefined;
  public url_base = environment.url_base;
  
  constructor(public http: HttpClient, public routerActivate: Router, private router: ActivatedRoute) {

      this.router.queryParams.subscribe(param=>{
        var id =  param["id"];
        this.http.get<Categorie>(this.url_base + '/categorie/' + id).subscribe((result) => {       
            this.categorie = result;
            this.code = this.categorie.code;
            this.libelle = this.categorie.libelle;
        }); 
      });
  }

  ClickRetour(){
    this.routerActivate.navigate(["/categories"]);
  }
}
