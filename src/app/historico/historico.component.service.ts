import { Injectable } from "@angular/core";
import { EventoHistorico } from "../model/EventoHistorico";

@Injectable({
  providedIn: 'root',
})
export class HistoricoService {
  private historico: EventoHistorico[] = [];

  adicionarEvento(acao: string, livro?: string): void {
    const dataHora = new Date().toLocaleString();
    const evento: EventoHistorico = { dataHora, acao, livro };
    this.historico.push(evento);
  }

  limparHistorico(): void {
    this.historico = [];
  }

  obterHistorico(): EventoHistorico[] {
    return this.historico;
  }
}
