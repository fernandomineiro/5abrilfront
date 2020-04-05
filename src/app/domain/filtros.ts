export class Filtros {
  protected filtro: object = {};

  public ativo() {
    this.filtro = { ...this.filtro, ativo: `=true` };
    return this;
  }

  public inativo() {
    this.filtro = { ...this.filtro, ativo: `=false` };
    return this;
  }

  public consultor() {
    this.filtro = { ...this.filtro, consultor: `=true` };
    return this;
  }

  public administrador() {
    this.filtro = { ...this.filtro, administrador: `=true` };
    return this;
  }

  public tecnico() {
    this.filtro = { ...this.filtro, tecnico: `=true` };
    return this;
  }

  public produtor() {
    this.filtro = { ...this.filtro, produtor: `=true` };
    return this;
  }

  public protocoloDeReferencia() {
    this.filtro = { ...this.filtro, protocolo_referencia: `=true` };
    return this;
  }

  public doProdutor(idProdutor: number) {
    if (idProdutor) {
      this.filtro = { ...this.filtro, id_produtor: `=${idProdutor}` };
    }
    return this;
  }

  public comNome(nome: string) {
    if (nome) {
      this.filtro = { ...this.filtro, nome: `=${nome}` };
    }
    return this;
  }

  public comCpf(cpf: string) {
    if (cpf) {
      this.filtro = { ...this.filtro, cpf: `=${cpf}` };
    }
    return this;
  }

  public comCertificadora(idCertificadora: number) {
    if (idCertificadora) {
      this.filtro = {
        ...this.filtro,
        id_certificadora: `=${idCertificadora}`
      };
    }
    return this;
  }

  public comEtapa(idEtapa: number) {
    if (idEtapa) {
      this.filtro = { ...this.filtro, id_etapa: `=${idEtapa}` };
    }
    return this;
  }

  public comFase(idFase: number) {
    if (idFase) {
      this.filtro = { ...this.filtro, id_fase: `=${idFase}` };
    }
    return this;
  }

  public comEstado(idEstado: number) {
    if (idEstado) {
      this.filtro = { ...this.filtro, id_estado: `=${idEstado}` };
    }
    return this;
  }

  public comMunicipio(idMunicipio: number) {
    if (idMunicipio) {
      this.filtro = { ...this.filtro, id_municipio: `=${idMunicipio}` };
    }
    return this;
  }

  public comPropriedade(idPropriedade: number) {
    if (idPropriedade) {
      this.filtro = {
        ...this.filtro,
        id_propriedade: `=${idPropriedade}`
      };
    }
    return this;
  }

  public comProdutor(idProdutor: number) {
    if (idProdutor) {
      this.filtro = { ...this.filtro, id_produtor: `=${idProdutor}` };
    }
    return this;
  }

  public comProfissao(profissao: string) {
    if (profissao) {
      this.filtro = { ...this.filtro, profissao: `=${profissao}` };
    }
    return this;
  }

  public comMatricula(matricula: string) {
    if (matricula) {
      this.filtro = { ...this.filtro, matricula: `=${matricula}` };
    }
    return this;
  }

  public comTema(idTema: number) {
    if (idTema) {
      this.filtro = { ...this.filtro, id_tema: `=${idTema}` };
    }
    return this;
  }

  public comSubtema(idSubtema: number) {
    if (idSubtema) {
      this.filtro = { ...this.filtro, id_sub_tema: `=${idSubtema}` };
    }
    return this;
  }

  public comCriterio(idCriterio: number) {
    if (idCriterio) {
      this.filtro = { ...this.filtro, id_criterio: `=${idCriterio}` };
    }
    return this;
  }
}
