

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventoHistorico } from '../model/EventoHistorico';
import { HistoricoService } from './historico.component.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss'],
})
export class HistoricoComponent implements OnInit, OnDestroy {
  historico: EventoHistorico[] = [];
  private historicoSubscription!: Subscription;

  constructor(private historicoService: HistoricoService) {}

  ngOnInit(): void {
    this.historico = this.historicoService.obterHistorico();
    this.historicoSubscription = this.historicoService.historicoAtualizado.subscribe(() => {
      this.historico = this.historicoService.obterHistorico();
    });
  }

  ngOnDestroy(): void {
    this.historicoSubscription.unsubscribe();
  }

  limparHistorico(): void {
    this.historicoService.limparHistorico();
  }
}
