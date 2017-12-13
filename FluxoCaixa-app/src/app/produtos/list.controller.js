export default class ListController {

    constructor(ProdutoServico) {
        this.filter = ''
        this.records = []
        this._service = ProdutoServico
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
            })
    }
}

ListController.$inject = ['ProdutoServico']
