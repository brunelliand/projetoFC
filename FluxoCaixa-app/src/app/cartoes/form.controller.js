export default class FormController {
  constructor($stateParams, $state, CartaoServico, Notification) {
    this.record = {};
    this.bandeira = [
      { descricao: "Visa", enum: "VISA" },
      { descricao: "Master", enum: "MASTER" },
      { descricao: "Cielo", enum: "CIELO" }
    ];
    this.tipo = [
      { descricao: "Crédito", enum: "CREDITO" },
      { descricao: "Débito", enum: "DEBITO" },
      { descricao: "Convênio", enum: "CONVENIO" }
    ];
    this.sistema = [
      { descricao: "POS", enum: "POS" },
      { descricao: "TEF", enum: "TEF" }
    ];

    this.nome = "cartão";
    this.title = "Adicionando " + this.nome;
    this._service = CartaoServico;
    if ($stateParams.id) {
      this.title = "Editando " + this.nome;
      this._service.findById($stateParams.id).then(data => {
        this.record = data;
      });
    }
    this._state = $state;
    this._notify = Notification;
  }

  save() {
    this._service
      .save(this.record)
      .then(resp => {
        this._notify.success("O " + this.nome + " foi salvo com sucesso!");
        this._state.go("cartao.list");
      })
      .catch(function() {
        this._notify.error("Erro ao salvar o " + this.nome + "!");
      });
  }

};



FormController.$inject = [
  "$stateParams",
  "$state",
  "CartaoServico",
  "Notification"
];
