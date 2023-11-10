import { Injectable } from '@angular/core';
import { ICadastroLivros } from '../model/ICadastroLivros';
import { HistoricoService } from '../historico/historico.component.service';

@Injectable({
  providedIn: 'root',
})
export class ListaService {
  livros: ICadastroLivros[] = [
    {
      nome: 'Jogos Vorazes',
      autor: 'Suzanne Collins',
      genero: 'Ação',
      anoLancamento: 2012,
    },
    {
      nome: 'Harry Potter e a Pedra Filosofal',
      autor: 'J.K Rowling',
      genero: 'Aventura',
      anoLancamento: 1999,
    },
  ];

  constructor(private historicoService: HistoricoService) {}

  excluirLivro(index: number): void {
    const livroExcluido = this.livros[index];
    this.livros.splice(index, 1);
    this.historicoService.adicionarEvento('Livro excluído', livroExcluido.nome);
  }

  adicionarLivro(novoLivro: ICadastroLivros): void {
    this.livros.push(novoLivro);
    this.historicoService.adicionarEvento('Livro adicionado', novoLivro.nome);
  }

  atualizarLivro(index: number, livroAtualizado: ICadastroLivros): void {
    this.livros[index] = livroAtualizado;
  }
}
