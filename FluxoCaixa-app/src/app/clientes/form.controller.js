export default class FormController {

    constructor($stateParams, $state, ClienteServico, Notification) {
        this.record = {}
        this.title = 'Adicionando registro'
        this._service = ClienteServico
        if ($stateParams.id) {
            this.title = 'Editando registro'
            this._service.findById($stateParams.id)
                .then(data => {
                    this.record = data
                })
        }
        this._state = $state
        this._notify = Notification
    }

    save() {
        this._service.save(this.record)
            .then(resp => {
                this._notify.success('Cliente salvo com sucesso!')
                this._state.go('cliente.list')
            }).catch(function(){
                this._notify.error('Erro ao salvar o cliente!')
            })
    }
}

FormController.$inject = ['$stateParams', '$state', 'ClienteServico', 'Notification']
