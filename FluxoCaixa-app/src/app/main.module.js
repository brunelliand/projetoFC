import * as angular from "angular";

import { default as uiRouter } from "@uirouter/angularjs";
import { default as uiNotification } from "angular-ui-notification";
import { default as uiUtilsMask } from "angular-input-masks";
import { mainConfig } from "./main/config";
import { funcionarioConfig } from "./funcionarios/config";
import { lancamentoConfig } from "./lancamentos/config";
import { bancoConfig } from "./bancos/config";
import { cartaoConfig } from "./cartoes/config";

export const appModule = "app";

var modulo = angular.module(appModule, [
  uiRouter,
  uiNotification,
  uiUtilsMask,
  "angularUtils.dirPagination"
]);

modulo
  .config(mainConfig(modulo))
  .config(funcionarioConfig(modulo))
  .config(lancamentoConfig(modulo))
  .config(bancoConfig(modulo))
  .config(cartaoConfig(modulo));



//Filtros
modulo.filter("percent", [
  "$filter",
  function($filter) {
    return function(input, decimals) {
      return $filter("number")(input, decimals) + "%";
    };
  }
]);

modulo.filter("cpf", [
  "$filter",
  function($filter) {
    return function(input) {
      var str = input + "";
      str = str.replace(/\D/g, "");
      str = str.replace(/(\d{3})(\d)/, "$1.$2");
      str = str.replace(/(\d{3})(\d)/, "$1.$2");
      str = str.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      return str;
    };
  }
]);

modulo.filter("tel", [
  "$filter",
  function($filter) {
    return function(input) {
      var str = input + "";
      str = str.replace(/\D/g, "");
      if (str.length === 11) {
        str = str.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
      } else {
        str = str.replace(/^(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
      }
      return str;
    };
  }
]);
