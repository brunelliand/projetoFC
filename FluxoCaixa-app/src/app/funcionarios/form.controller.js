export default class FormController {
  constructor($stateParams, $state, FuncionarioServico, Notification) {
    this.record = {};
    this.nome = "funcionário";
    this.estados = [];
    this.title = "Adicionando " + this.nome;
    this._service = FuncionarioServico;
    if ($stateParams.id) {
      this.title = "Editando " + this.nome;
      this._service.findById($stateParams.id).then(data => {
        this.record = data;
      });
    }
    this._state = $state;
    this._notify = Notification;
  }

  validation() {
    this._notify.error("O registro tem sérios problemas!");
  }

  save() {
    this._service
      .save(this.record)
      .then(resp => {
        this._notify.success("O " + this.nome + " foi salvo com sucesso!");
        this._state.go("funcionario.list");
      })
      .catch(function() {
        this._notify.error("Erro ao salvar o " + this.nome + "!");
      });
  }

  limpaEndereco() {
    (  this.record.endereco = "");
  }

  getCep() {
    let _cep = this.record.cep;
    let url = "http://api.postmon.com.br/v1/cep";
    this._service.findById(_cep, url).then(data => {
      this.record.endereco = data;
      this._notify.success("CEP localizado!");
    });
  }

   getEstados() {
    let url = 'http://localhost:8080/FluxoCaixa-web/api/estados'
    this._service.findAll(url)
        .then(data => { 
            this.estados = data
            console.log(data);
            
        })
    } 
}

FormController.$inject = [
  "$stateParams",
  "$state",
  "FuncionarioServico",
  "Notification"
];
