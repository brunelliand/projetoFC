export default class ListController {

    constructor(FuncionarioServico, Notification) {
        this.filter = ''
        this.records = []
        this._service = FuncionarioServico
        this._notify = Notification
        this.load()
    }

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

ListController.$inject = ['FuncionarioServico', 'Notification']
