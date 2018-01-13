export default class FormController {

    constructor($stateParams, $state, BancoServico, Notification) {
        this.record = {}
        this.nome = 'banco'
        this.title = 'Adicionando '+this.nome
        this._service = BancoServico
        if ($stateParams.id) {
            this.title = 'Editando '+this.nome
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
                this._notify.success('O '+this.nome+' foi salvo com sucesso!')
                this._state.go('banco.list')
            }).catch(function(){
                this._notify.error('Erro ao salvar o '+this.nome+'!')
            })
    }
}

FormController.$inject = ['$stateParams', '$state', 'BancoServico', 'Notification']
