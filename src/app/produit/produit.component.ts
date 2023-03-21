import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Produit } from './models/Produit';
import { ProduitRes } from './models/ProduitRes';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  public produits: Produit[] = [];
  public total: number = 0;
  public page: number = 1;
  public tabPage: number[] = [];
  public size: number = 5;
  public url_base = environment.url_base;

  constructor(public http: HttpClient,  private router: Router) {
    
    http.get<ProduitRes>(this.url_base + '/produit?page=1').subscribe((result) => {
      this.total = result.totale;
      var nbPage = this.total / this.size; 
      var reste = this.total % this.size;
   
      nbPage = reste == 0 ? parseInt(nbPage.toFixed(2)) :  parseInt(nbPage.toFixed(2)) + 1;
      
      for(let i = 1; i <= nbPage; i++){
        this.tabPage.push(i);
      }

      var nbParcour = 1 == nbPage ? reste : this.size;

      for(let i = 1; i <= nbParcour; i++){
        this.produits.push(result.produits[i-1]);
      }
    });
  }

  method(page: number){
    this.http.get<ProduitRes>(this.url_base + '/produit?page=' + page).subscribe((result) => {       
      this.produits = [];      
      this.tabPage = [];

      this.total = result.totale;
      var nbPage = this.total / this.size; 
      var reste = this.total % this.size; 
      
      nbPage = reste == 0 ? parseInt(nbPage.toFixed(2)) :  parseInt(nbPage.toFixed(2)) + 1;

      for(let i = 1; i <= nbPage; i++){
        this.tabPage.push(i);
      }
      
      var nbParcour = page == nbPage ? reste : this.size;
      
      for(let i = 1; i <= nbParcour; i++){
        this.produits.push(result.produits[i-1]);
      }
    });  
  }

  ClickCreate(){
    this.router.navigate(["/produits/create"]);
  }
  
  ClickDetails(id: number){
    this.router.navigate(["/produits/detail"], {queryParams:{id: id}});
  }

  ClickEdit(id:number){
    this.router.navigate(["/produits/edit"], {queryParams:{id: id}});
  }
  
  ClickDelete(id:number){
    this.router.navigate(["/produits/delete"], {queryParams:{id: id}});
  }
}