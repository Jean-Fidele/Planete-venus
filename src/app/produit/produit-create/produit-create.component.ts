import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitRes } from '../models/ProduitRes';

@Component({
  selector: 'app-produit-create',
  templateUrl: './produit-create.component.html',
  styleUrls: ['./produit-create.component.css']
})
export class ProduitCreateComponent {
  
  public libelle : string | undefined;

  constructor(public http: HttpClient, private router: Router){ }

  ClickCreate(){
    this.http.post<ProduitRes>('https://localhost:7185/api/produit', {
      name: this.libelle, categorieId: 12
    }).subscribe((result) => {
      this.router.navigate(["/produit"]);
    });
  }
}
