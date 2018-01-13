import AbstractCrudService from "../abstract.crud.service";

export default class CartaoServico extends AbstractCrudService {

  constructor($http) {
    super($http, 'http://localhost:8080/FluxoCaixa-web/api/cartoes')
  }

}

CartaoServico.$inject = ['$http']
