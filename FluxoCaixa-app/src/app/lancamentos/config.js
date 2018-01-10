import ListController from './list.controller'
import FormController from './form.controller'

import LancamentoServico from './servico'

export const lancamentoConfig = (modulo) => {

  modulo.service('LancamentoServico', LancamentoServico)
  
  return ['$stateProvider', '$urlRouterProvider', 
   ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('lancamento', {
        template: require('@views/default.html'),
        url: '/lancamentos',
        onEnter: ['$state', function($state) {
          $state.go('lancamento.list')
        }]
      })
      .state('lancamento.list', {
        template: require('@views/lancamentos/lista.html'),
        url: '/listar',
        controller: ListController,
        controllerAs: 'vm'
      })
      .state('lancamento.new', {
        template: require('@views/lancamentos/form.html'),
        url: '/novo',
        controller: FormController,
        controllerAs: 'vm'
      })
      .state('lancamento.edit', {
        template: require('@views/lancamentos/form.html'),
        url: '/editar/{id}',
        controller: FormController,
        controllerAs: 'vm'
      });
  }]
}
