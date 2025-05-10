import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CelularService {

  private apiUrl = 'http://localhost:8080/celulares'; // URL do seu backend

  constructor(private http: HttpClient) { }

  // Método para obter todos os celulares
  getCelulares(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Método para adicionar um novo celular
  addCelular(celular: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, celular);
  }
}
