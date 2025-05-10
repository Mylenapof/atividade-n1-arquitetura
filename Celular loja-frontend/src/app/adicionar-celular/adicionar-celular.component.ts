import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  

@Component({
  selector: 'app-adicionar-celular',
  standalone: true,
  imports: [FormsModule, HttpClientModule],  
  templateUrl: './adicionar-celular.component.html',
  styleUrls: ['./adicionar-celular.component.css']
})
export class AdicionarCelularComponent {
  celular = { id: 0, nome: '', preco: 0 };

  constructor(private http: HttpClient) {}

  adicionar() {
    this.http.post('http://localhost:8080/api/api/celulares', this.celular).subscribe(response => {
      console.log('Celular Adicionado:', response);
    });
  }
}
