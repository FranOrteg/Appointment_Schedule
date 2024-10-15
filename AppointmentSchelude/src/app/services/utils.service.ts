import { Injectable } from '@angular/core';
import * as jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  getToken() {
    const obj = jwtDecode.jwtDecode<any>(sessionStorage.getItem('token')!);
    console.log(obj, "token decodificado");   
    return obj;
  }

}