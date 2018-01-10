export default class FormController {

    constructor($stateParams, $state, LancamentoServico, Notification) {
        this.record = {}
        this.title = 'Adicionando registro'
        this._service = LancamentoServico
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
                this._notify.success('Lancamento salvo com sucesso!')
                this._state.go('lancamento.list')
            }).catch(function(){
                this._notify.error('Erro ao salvar o lancamento!')
            })
    }
}

FormController.$inject = ['$stateParams', '$state', 'LancamentoServico', 'Notification']
