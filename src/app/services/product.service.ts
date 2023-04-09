/**
 * @author : Mohamed YOUSSFI, med@youssfi.net,
 * ENSET Mohammedia, Université Hassan II de Casablanca
 *
 */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environment/environment';
import {Product} from '../model/product.model';

@Injectable({providedIn:"root"})
export class ProductService {

  constructor(private http:HttpClient) {
  }

  public getProducts():Observable<Product[]>{
    let host=Math.random()>0.2?environment.host:environment.unreachableHost;
    return this.http.get<Product[]>(host+"/product");
  }
  
  public getSelectedProducts():Observable<Product[]>{
    return this.http.get<Product[]>(environment.host+"/product?selected=true");
  }

  public getAvailableProducts():Observable<Product[]>{
    return this.http.get<Product[]>(environment.host+"/product?available=true");
  }

  public searchProducts(name:string):Observable<Product[]>{
    return this.http.get<Product[]>(environment.host+"/product?name_like="+name);
  }
  
  public delete(id:number):Observable<void>{
     return this.http.delete<void>(environment.host+"/products/"+id);
  }

  public save(product:Product):Observable<Product>{
    return this.http.post<Product>(environment.host+"/products/",product);
  }
 
  public getProductById(id:number):Observable<Product>{
    return this.http.get<Product>(environment.host+"/products/"+id);
  }

}
