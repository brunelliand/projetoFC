export default class ListController {

    constructor(BancoServico, Notification) {
        this.filter = ''
        this.nome = 'Bancos'
        this.records = []
        this._service = BancoServico
        this._notify = Notification
        this.load()
    }

    ordenarPor(campo) {
		this.criterioDeOrdenacao = campo;
        this.direcaoDaOrdenacao = !this.direcaoDaOrdenacao;
	};

    load() {
        this._service.findAll()
          .then(data => {
              this.records = data
          })
          .catch(error => {
              console.log(error)
          })
    }

    excluir(id) {
        this._service.remove(id)
            .then(response => {
                this.load()
                this._notify.success('Registro excluído com sucesso')
            }).catch(erro => {
                this._notify({message: erro.message || 'Problemas ao excluir o registro'}, erro.type || 'error')
            }) 
    }
}

ListController.$inject = ['BancoServico', 'Notification']
