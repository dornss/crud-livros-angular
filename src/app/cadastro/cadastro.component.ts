import { GeneroLivro } from '../model/GeneroLivro.enum';
import { ICadastroLivros } from '../model/ICadastroLivros';
import { CadastroService } from './cadastro.component.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  listaLivros!: ICadastroLivros[];
  nome!:string;
  autor!:string;
  genero!: GeneroLivro;
  anoLancamento!: number;
  constructor (private cadastroService:CadastroService) {
    this.listaLivros = this.cadastroService.livros;
  }

  adicionarLivro() {
    this.cadastroService.adicionar(this.nome, this.autor, this.genero, this.anoLancamento)
  }

  excluirLivro(index:number) {
    this.cadastroService.excluirTrens(index);
  }
}
