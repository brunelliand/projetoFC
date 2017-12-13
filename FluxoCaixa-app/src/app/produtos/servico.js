import AbstractCrudService from "../abstract.crud.service";

export default class ProdutoServico extends AbstractCrudService {

  constructor($http) {
    super($http, 'http://localhost:8080/FluxoCaixa-web/api/produtos')
  }

}

ProdutoServico.$inject = ['$http']
