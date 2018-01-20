(function() {
  /**
   * Config
   */
  var moduleName = "angularUtils.date";
  var DEFAULT_ID = "__default";

  angular
    .module(moduleName, [])

    .directive("date", ["$timeout", "$filter"], function date(dateFilter) {
      return {
        require: "ngModel",
        link: function(scope, elm, attrs, ctrl) {
          var dateFormat = attrs["date"] || "yyyy-MM-dd";

          ctrl.$formatters.unshift(function(modelValue) {
            return date(modelValue, dateFormat);
          });
        }
      };
    });
})();
