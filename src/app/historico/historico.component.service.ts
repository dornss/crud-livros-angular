import { Injectable, EventEmitter } from '@angular/core';
import { EventoHistorico } from '../model/EventoHistorico';


@Injectable({
  providedIn: 'root',
})
export class HistoricoService {
  private historico: EventoHistorico[] = [];
  historicoAtualizado: EventEmitter<void> = new EventEmitter<void>();

  adicionarEvento(acao: string, livro?: string): void {
    const dataHora = new Date().toLocaleString();
    const evento: EventoHistorico = { dataHora, acao, livro };
    this.historico.push(evento);
    this.historicoAtualizado.emit();
  }

  limparHistorico(): void {
    this.historico = [];
    this.historicoAtualizado.emit();
  }

  obterHistorico(): EventoHistorico[] {
    return this.historico.slice();
  }
}
