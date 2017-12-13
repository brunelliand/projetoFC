import * as angular from 'angular'

import { default as uiRouter } from '@uirouter/angularjs'
import { default as uiNotification } from 'angular-ui-notification'
import { mainConfig } from './main/config'
import { clienteConfig } from './clientes/config'

export const appModule = 'app'

var modulo = angular.module(appModule, [uiRouter, uiNotification])

modulo.config(mainConfig(modulo))
      .config(clienteConfig(modulo))
