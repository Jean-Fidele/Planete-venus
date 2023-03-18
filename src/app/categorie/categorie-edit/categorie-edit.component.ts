import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../models/Categorie';


@Component({
  selector: 'app-categorie-edit',
  templateUrl: './categorie-edit.component.html',
  styleUrls: ['./categorie-edit.component.css']
})
export class CategorieEditComponent {
  public code: number = 1;
  public libelle: string | undefined;
  public categorie: Categorie | undefined;

  constructor(public http: HttpClient, private activatedRouter: ActivatedRoute, private router: Router) {
    this.activatedRouter.queryParams.subscribe(param=>{
      var id =  param["id"];
      this.http.get<Categorie>('https://localhost:7185/api/categorie/' + id).subscribe((result) => {       
          this.categorie = result;
          this.code = this.categorie.code;
          this.libelle = this.categorie.libelle;
      }); 
    })
  }
  
  ClickEdit(){
    this.activatedRouter.queryParams.subscribe(param=>{
      var id =  param["id"];
      this.http.put<Categorie>('https://localhost:7185/api/categorie/' + id, { 
          code: this.code, 
          libelle: this.libelle
        }).subscribe((result) => {       
        this.router.navigate(["/categories"]);
      }), (err: any) => {
        console.log(err);
      }; 
    })
  }
}
