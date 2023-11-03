import { GeneroLivro } from "./GeneroLivro.enum";

export interface ICadastroLivros {
  nome: string;
  autor: string;
  genero: GeneroLivro;
  anoLancamento: number;
}
