export default class FormController {

    constructor( $stateParams, $state, FuncionarioServico, Notification) {
        this.record = {}
        this.title = 'Adicionando registro'
        this._service = FuncionarioServico
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
                this._state.go('funcionario.list')
            }).catch(function(){
                this._notify.error('Erro ao salvar o lancamento!')
            })
    }

    getCep() {
        let _cep = this.record.cep
        var url = 'http://api.postmon.com.br/v1/cep'
        this._service.findById(_cep,url)
            .then(data => {
                this.record = data
                this._notify.success("CEP localizado!");
                console.log(data)
            })
    }

  
    
}

FormController.$inject = ['$stateParams', '$state', 'FuncionarioServico', 'Notification']
