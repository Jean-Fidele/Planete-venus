import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from './models/Categorie';
import { CategorieRes } from './models/CategorieRes';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent {
  public categories: Categorie[] = [];
  public total: number = 0;
  public page: number = 1;
  public tabPage: number[] = [];
  public size: number = 5;

  constructor(public http: HttpClient,  private router: Router) {
    http.get<CategorieRes>('https://localhost:7185/api/categorie?page=1').subscribe((result) => {
      this.total = result.totale;
      var nbPage = this.total / this.size; 
      var reste = this.total % this.size;
      nbPage = reste == 0 ? nbPage : nbPage + 1;
      
      for(let i = 1; i <= nbPage; i++){
        this.tabPage.push(i);
      }

      for(let i = 1; i <= this.size; i++){
        this.categories.push(result.categories[i-1]);
      }
    });
  }

  method(page: number){
   
    this.http.get<CategorieRes>('https://localhost:7185/api/categorie?page=' + page).subscribe((result) => {       
      this.categories = [];      
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
        this.categories.push(result.categories[i-1]);
      }
    });  
  }

  ClickDetals(id: number){
    this.router.navigate(["/categories/detail"], {queryParams:{id: id}});
  }

  handleChange($event: Event){
    console.log("EVENT :" + this);
  }
}