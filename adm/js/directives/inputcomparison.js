
app.directive('inputComparison', function () {
    return {
        require: 'ngModel',
        scope: {
            inputComparison: '='
        },
        link: function (scope, element, attrs, ctrl) {
            ctrl.$validators.identical = function (modelValue, viewValue) {
                if (modelValue === scope.inputComparison)
                    return true;
                return false;
            };
        }
    };
});

