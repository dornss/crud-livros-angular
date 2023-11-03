import { Injectable } from "@angular/core";
import { ICadastroLivros } from "../model/ICadastroLivros";
import { ListaService } from "../lista/lista.component.service";

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  constructor(private listaService: ListaService) {}

  adicionar(
    nomeRecebido: string,
    autorRecebido: string,
    generoRecebido: string,
    anoRecebido: number
  ): void {
    if (nomeRecebido && autorRecebido) {
      const novoLivro: ICadastroLivros = {
        nome: nomeRecebido,
        autor: autorRecebido,
        genero: generoRecebido,
        anoLancamento: anoRecebido
      };

      this.listaService.adicionarLivro(novoLivro);
    } else {
      console.error("Nome e autor são obrigatórios");
    }
  }
}
