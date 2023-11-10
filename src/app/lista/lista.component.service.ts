import { Injectable } from '@angular/core';
import { ICadastroLivros } from '../model/ICadastroLivros';

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

  excluirLivro(index: number): void {
    this.livros.splice(index, 1);
  }

  adicionarLivro(novoLivro: ICadastroLivros): void {
    this.livros.push(novoLivro);
  }

  atualizarLivro(index: number, livroAtualizado: ICadastroLivros): void {
    this.livros[index] = livroAtualizado;
  }
}
