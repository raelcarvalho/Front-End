import { Component, OnInit } from '@angular/core';
import { CidadeService } from '../shared/cidade.service';
import { Estado } from '../shared/estado.model';
import { EstadoService } from '../shared/estado.service';
import { Notification } from '../shared/notification.model';

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  estado = 'PR';
  nomeOfState = 'Paraná';
  url = 'assets/svg/Bandeira_do_Paraná.svg';
  estadoSelected:Estado = {nome: "paraná", uf: "PR", populacao: 10, urlImage:"", custoEstadoUs: 0}
  closePopUp = false;

  options = [
    {
        nome: 'Parana',
        uf: 'PR',
        url: 'assets/svg/Bandeira_do_Paraná.svg',
      },
      {
        nome: 'Santa Catarina',
        uf: 'SC',
        url: 'assets/svg/Bandeira_de_Santa_Catarina.svg',
      },
    {
      nome: 'Rio Grande do Sul',
      uf: 'RS',
      url: 'assets/svg/Bandeira_do_Rio_Grande_do_Sul.png',
    },
    
  ];

  constructor(
    private estadoService: EstadoService,
    private cidadeService: CidadeService
  ) { }

  ngOnInit(): void {
    this.subscribeNotifications();
    this.setEstadoSelected(this.estado);
  }

  selectEstado() {
    let value = this.nomeOfState;
    let estadoSelected = this.options.filter(
      (estado) => estado.nome === value
    )[0];
    this.estado = estadoSelected.uf;
    this.url = estadoSelected.url;
    this.setEstadoSelected(this.estado);
  }

  newCidade() {
    this.closePopUp = false;
  }

  private setEstadoSelected(uf: string) {
    this.estadoService
      .getEstadoById(uf)
      .then((estado) => {
        this.estadoSelected = estado as Estado;
        this.estadoSelected.urlImage = this.url;
      })
      .catch((err) => { });
  }

  private subscribeNotifications() {
    this.cidadeService.savedCidade.subscribe((notification: Notification) => {
      if (notification.type === "successfully") {
        this.closePopUp = true;
        this.setEstadoSelected(this.estadoSelected?.uf || this.estado);
      }
    });
    this.cidadeService.deletedCidade.subscribe((notification: Notification) => {
      if (notification.type === "successfully")
        this.setEstadoSelected(this.estadoSelected?.uf || this.estado);

    });
  }
}
