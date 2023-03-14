import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from '../models/Categorie';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  public code: number = 1;
  public libelle: string | undefined;
  public categorie: Categorie | undefined;

  constructor(public http: HttpClient,  private router: ActivatedRoute) {

      this.router.queryParams.subscribe(param=>{
        var id =  param["id"];
        this.http.get<Categorie>('https://localhost:7185/api/categorie/' + id).subscribe((result) => {       
            this.categorie = result;
            this.code = this.categorie.code;
            this.libelle = this.categorie.libelle;
        }); 
      });
  }
}
