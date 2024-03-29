import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';
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
  public isActive = 1;
  public url_base = environment.url_base;
  
  constructor(public http: HttpClient,  private router: Router) {
    http.get<CategorieRes>(this.url_base + '/categorie?page=1').subscribe((result) => {
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
    
    this.http.get<CategorieRes>(this.url_base + '/categorie?page=' + page).subscribe((result) => {       
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

  OnChangeMenu(p: number){
    this.isActive = p;
  }

  ClickCreate(){
    this.router.navigate(["/categories/create"]);
  }

  ClickDetails(id: number){
    this.router.navigate(["/categories/detail"], {queryParams:{id: id}});
  }

  ClickEdit(id:number){
    this.router.navigate(["/categories/edit"], {queryParams:{id: id}});
  }

  ClickDelete(id:number){
    this.router.navigate(["/categories/delete"], {queryParams:{id: id}});
  }

  handleChange($event: Event){
    console.log("EVENT :" + this);
  }

  OnNextPage(){
    this.isActive = this.isActive + 1;
    this.method(this.isActive);
  }

  OnPreviewPage(){
    this.isActive = this.isActive - 1;
    this.method(this.isActive);
  }
}