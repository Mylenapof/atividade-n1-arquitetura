import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Celular Loja';
  celulares: any[] = [];

  
  novoNome: string = '';
  novoPreco: number | null = null;

  constructor(private http: HttpClient) {
    this.listarCelulares();
  }

  listarCelulares() {
    this.http.get<any[]>('http://localhost:8080/api/api/celulares').subscribe(data => {
      this.celulares = data;
    });
  }

  salvarCelular() {
    
    if (!this.novoNome || this.novoPreco === null) {
      alert('Preencha o nome e o preço.');
      return;
    }

    const novoCelular = {
      nome: this.novoNome,
      preco: this.novoPreco
    };

    this.http.post('http://localhost:8080/api/api/celulares', novoCelular).subscribe({
      next: (response) => {
        console.log('Celular adicionado:', response);
        this.novoNome = '';
        this.novoPreco = null;
        this.listarCelulares();
      },
      error: (error) => {
        console.error('Erro ao adicionar celular:', error);
        alert('Erro ao salvar celular. Veja o console.');
      }
    });
  }

  excluirCelular(id: number) {
    if (confirm('Tem certeza que deseja excluir este celular?')) {
      this.http.delete(`http://localhost:8080/api/api/celulares/${id}`).subscribe(() => {
        console.log('Celular excluído com sucesso');
        this.listarCelulares();
      });
    }
  }
}