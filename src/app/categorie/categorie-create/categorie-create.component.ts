import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieRes } from '../models/CategorieRes';

@Component({
  selector: 'app-categorie-create',
  templateUrl: './categorie-create.component.html',
  styleUrls: ['./categorie-create.component.css']
})
export class CategorieCreateComponent {
  
  public libelle : string | undefined;

  constructor(public http: HttpClient, private router: Router){ }

  ClickCreate(){
    this.http.post<CategorieRes>('https://localhost:7185/api/categorie', {
      libelle: this.libelle
    }).subscribe((result) => {
      this.router.navigate(["/categories"]);
    });
  }
}