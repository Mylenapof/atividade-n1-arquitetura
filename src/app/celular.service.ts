import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Celular } from './celular';

@Injectable({
  providedIn: 'root'
})
export class CelularService {

  private apiUrl = 'http://localhost:8080/celulares';  // URL da sua API Spring Boot

  constructor(private http: HttpClient) { }

  getCelulares(): Observable<Celular[]> {
    return this.http.get<Celular[]>(this.apiUrl);
  }

  adicionarCelular(celular: Celular): Observable<Celular> {
    return this.http.post<Celular>(this.apiUrl, celular);
  }

  deletarCelular(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
