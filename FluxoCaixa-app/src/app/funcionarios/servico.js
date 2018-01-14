import AbstractCrudService from "../abstract.crud.service";

export default class FuncionarioServico extends AbstractCrudService {

  constructor($http) {
    super($http, 'http://localhost:8080/FluxoCaixa-web/api/funcionarios')
  }

}

FuncionarioServico.$inject = ['$http']
