import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';
import { CategorieRes } from '../models/CategorieRes';

@Component({
  selector: 'app-categorie-create',
  templateUrl: './categorie-create.component.html',
  styleUrls: ['./categorie-create.component.css']
})
export class CategorieCreateComponent {
  
  public libelle : string | undefined;
  public url_base = environment.url_base;

  constructor(public http: HttpClient, private router: Router){ }

  ClickCreate(){
    this.http.post<CategorieRes>(this.url_base + '/categorie', {
      libelle: this.libelle
    }).subscribe((result) => {
      this.router.navigate(["/categories"]);
    });
  }
}