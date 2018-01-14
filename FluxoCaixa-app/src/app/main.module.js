import * as angular from 'angular'

import { default as uiRouter } from '@uirouter/angularjs'
import { default as uiNotification } from 'angular-ui-notification'
import { mainConfig } from './main/config'
import { funcionarioConfig } from './funcionarios/config'
import { lancamentoConfig } from './lancamentos/config'
import { bancoConfig } from './bancos/config'
import { cartaoConfig } from './cartoes/config'




export const appModule = 'app'

var modulo = angular.module(appModule, [uiRouter, uiNotification, 'angularUtils.dirPagination'])

modulo.config(mainConfig(modulo))
      .config(funcionarioConfig(modulo))
      .config(lancamentoConfig(modulo))
      .config(bancoConfig(modulo))
      .config(cartaoConfig(modulo))

modulo.filter('percent', ['$filter', function ($filter) {
      return function (input, decimals) {
            return $filter('number')(input , decimals) + '%';
      };
      }]);




