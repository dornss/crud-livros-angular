import { Injectable } from '@angular/core';
import { ICadastroLivros } from '../model/ICadastroLivros';
import { GeneroLivro } from '../model/GeneroLivro.enum';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  livros: ICadastroLivros[] = [
    {
      nome: 'Jogos Vorazes',
      autor: 'Suzanne Collins',
      genero: GeneroLivro.ACAO,
      anoLancamento: 2012,
    },
    {
      nome: 'Harry Potter e a Pedra Filosofal',
      autor: 'J.K Rowling',
      genero: GeneroLivro.AVENTURA,
      anoLancamento: 1999,
    },
  ];

  adicionar(
    nomeRecebido: string,
    autorRecebido: string,
    generoRecebido: GeneroLivro,
    anoRecebido: number
  ): void {
    const novoLivro: ICadastroLivros = {
      nome: nomeRecebido,
      autor: autorRecebido,
      genero: generoRecebido,
      anoLancamento: anoRecebido
    };
    this.livros.push(novoLivro);
  }

  excluirTrens(index: number): void {
    this.livros.splice(index, 1);
  }
}
