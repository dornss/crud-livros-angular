import { ICadastroLivros } from '../model/ICadastroLivros';
import { Component, OnInit } from '@angular/core';
import { ListaService } from './lista.component.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  listaLivros: ICadastroLivros[] = [];
  livroEditIndex: number | null = null;

  constructor(private listaService: ListaService) {}

  ngOnInit(): void {
    this.listaLivros = this.listaService.livros;
  }

  excluirLivro(index: number): void {
    this.listaService.excluirLivro(index);
  }

  editarLivro(index: number): void {
    this.livroEditIndex = index;
  }

  salvarEdicao(index: number): void {
    if (index !== null) {
      this.livroEditIndex = null;
      this.listaService.atualizarLivro(index, this.listaLivros[index]);
    }
  }

  cancelarEdicao(): void {
    this.livroEditIndex = null;
  }
}
