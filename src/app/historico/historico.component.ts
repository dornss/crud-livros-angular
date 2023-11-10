// historico.component.ts

import { Component, OnInit } from '@angular/core';

import { EventoHistorico } from '../model/EventoHistorico';
import { HistoricoService } from './historico.component.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss'],
})
export class HistoricoComponent implements OnInit {
  historico: EventoHistorico[] = [];

  constructor(private historicoService: HistoricoService) {}

  ngOnInit(): void {
    this.historico = this.historicoService.obterHistorico();

  }

  limparHistorico(): void {
    this.historicoService.limparHistorico();
    this.historico = [];
  }
}
