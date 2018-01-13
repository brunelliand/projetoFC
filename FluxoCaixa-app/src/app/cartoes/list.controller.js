export default class ListController {

    constructor(CartaoServico, Notification) {
        this.filter = ''
        this.nome = 'Cartões'
        this.tipo = [
            {descricao:'Crédito', enum :'CREDITO'},
            {descricao:'Débito', enum:'DEBITO'},
            {descricao:'Convênio', enum:'CONVENIO'}
          ]
        this.records = []
        this._service = CartaoServico
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

ListController.$inject = ['CartaoServico', 'Notification']
