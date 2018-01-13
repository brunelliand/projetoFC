import ListController from './list.controller'
import FormController from './form.controller'

import BancoServico from './servico'

export const bancoConfig = (modulo) => {

  modulo.service('BancoServico', BancoServico)
  
  return ['$stateProvider', '$urlRouterProvider', 
   ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('banco', {
        template: require('@views/default.html'),
        url: '/bancos',
        onEnter: ['$state', function($state) {
          $state.go('banco.list')
        }]
      })
      .state('banco.list', {
        template: require('@views/bancos/list.html'),
        url: '/listar',
        controller: ListController,
        controllerAs: 'vm'
      })
      .state('banco.new', {
        template: require('@views/bancos/form.html'),
        url: '/novo',
        controller: FormController,
        controllerAs: 'vm'
      })
      .state('banco.edit', {
        template: require('@views/bancos/form.html'),
        url: '/{id}',
        controller: FormController,
        controllerAs: 'vm'
      });
  }]
}
