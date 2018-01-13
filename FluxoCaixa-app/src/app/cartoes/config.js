import ListController from './list.controller'
import FormController from './form.controller'

import CartaoServico from './servico'

export const cartaoConfig = (modulo) => {

  modulo.service('CartaoServico', CartaoServico)
  
  return ['$stateProvider', '$urlRouterProvider', 
   ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('cartao', {
        template: require('@views/default.html'),
        url: '/cartoes',
        onEnter: ['$state', function($state) {
          $state.go('cartao.list')
        }]
      })
      .state('cartao.list', {
        template: require('@views/cartoes/list.html'),
        url: '/listar',
        controller: ListController,
        controllerAs: 'vm'
      })
      .state('cartao.new', {
        template: require('@views/cartoes/form.html'),
        url: '/novo',
        controller: FormController,
        controllerAs: 'vm'
      })
      .state('cartao.edit', {
        template: require('@views/cartoes/form.html'),
        url: '/{id}',
        controller: FormController,
        controllerAs: 'vm'
      });
  }]
}
