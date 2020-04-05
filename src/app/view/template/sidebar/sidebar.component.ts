import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  private links = [
    { label: 'Home', url: '/sistema/home', icon: 'fa fa-home', active: 'home' },
    {
      label: 'Configurações',
      icon: 'fa fa-cogs',
      url: 'conf',
      children: [
        { label: 'Menu', url: '/sistema/configuracao/menu' },
        { label: 'Perfil', url: '/sistema/configuracao/perfil' },
        { label: 'Usuários', url: '/sistema/configuracao/usuario' }
      ]
    },
    {
      label: 'Cadastros',
      icon: 'fa fa-edit',
      url: 'cada',
      children: [
        { label: 'Estados', url: '/sistema/cadastro/estados' },
        { label: 'Municípios', url: '/sistema/cadastro/municipios' },
        {
          label: 'Filiais',
          url: '/sistema/cadastro/filiais'
        },
        { 
          label: 'Pessoas',
          url: '/sistema/cadastro/pessoas'
        },
        { label: 'Propriedades', url: '/sistema/cadastro/propriedade' }
      ]
    },
    {
      label: 'Formulários',
      icon: 'fa fa-check-square-o',
      url: 'ques',
      children: [ 
        {
          label: 'Informação',
          url: '/sistema/formulario/informacao/'
        },
        { label: 'Grupo de lista', url: '/sistema/formulario/grupo' },
        { label: 'Formulários', url: '/sistema/formulario/formulario' },
        { label: 'Atendimentos', url: '/sistema/formulario/atendimento' }
      ]
    },
    {
      label: 'Cultivos',
      icon: 'fa fa-desktop',
      url: 'diag',
      children: [
        {
          label: 'Safra',
          url: '/sistema/cultivo/safra/'
        },
        { label: 'Contratos', url: '/sistema/cultivo/contrato' }
      ]
    },
    {
      label: 'Relatórios',
      icon: 'fa fa-pie-chart',
      url: '/sistema/relatorio/relatorio',
    }
  ];

  constructor() {}

  ngOnInit() {
    $(() => {
      const trees: any = $('[data-widget="tree"]');
      trees.tree();
    });

    $('body')['layout']('fixSidebar');
  }

  private _aba: string = '/sistema/home';

  private setActive(aba: string) {
    this._aba = aba;
  }
}
