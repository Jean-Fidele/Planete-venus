import { Injectable } from '@angular/core';
@Injectable()
export class AuthService{

 constructor() { }

 getAuthToken():string | null{
    return localStorage.getItem('token');
 }
}