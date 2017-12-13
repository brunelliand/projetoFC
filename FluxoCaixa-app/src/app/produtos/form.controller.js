export default class FormController {

    constructor($stateParams, $state, ProdutoServico) {
        this.record = {};
        this.title = 'Adicionando registro';
        this._service = ProdutoServico
        if ($stateParams.id) {
            this.title = 'Editando registro';
            this._service.findById($stateParams.id)
               .then(data => {
                   this.record = data
               })
        }
        this._state = $state;
    }

    save() {
        this._service.save(this.record)
            .then(resp => {
                this._state.go('produto.list')
            })
    }
}

FormController.$inject = ['$stateParams', '$state', 'ProdutoServico']
