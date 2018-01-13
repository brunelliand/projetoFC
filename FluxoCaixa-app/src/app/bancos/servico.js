import AbstractCrudService from "../abstract.crud.service";

export default class BancoServico extends AbstractCrudService {

  constructor($http) {
    super($http, 'http://localhost:8080/FluxoCaixa-web/api/bancos')
  }

}

BancoServico.$inject = ['$http']
