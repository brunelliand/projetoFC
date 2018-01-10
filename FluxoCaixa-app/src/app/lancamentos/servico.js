import AbstractCrudService from "../abstract.crud.service";

export default class LancamentoServico extends AbstractCrudService {

  constructor($http) {
    super($http, 'http://localhost:8080/FluxoCaixa-web/api/lancamentos')
  }

}

LancamentoServico.$inject = ['$http']
