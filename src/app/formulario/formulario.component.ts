
  import { FormularioService } from './formulario.componente.service';
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.scss']
  })
  export class FormularioComponent {
    nome!:string;
    autor!:string;
    genero!: string;
    anoLancamento!: number;

    constructor(private formularioService: FormularioService) {}

    adicionarLivro() {
      this.formularioService.adicionar(this.nome, this.autor, this.genero, this.anoLancamento);  }
  }
