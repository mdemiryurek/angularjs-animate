angular.module('Examples')

.controller('ExamplesController', ['$scope', '$timeout',
    function ($scope, $timeout) {
        //Example-5 and Example-6
        $scope.example5List = [
            { name: 'Lunchmeat' },
            { name: 'Bread' },
            { name: 'Milk' },
            { name: 'Cheese' }
        ];
        $scope.addItem = function () {
            $scope.example5List.push({ name: $scope.newName });
            $scope.newName = "";
        };
        $scope.removeItem = function (index) {
            $scope.example5List.splice(index, 1);
        };

        //Example-7
        $scope.example7List = ['settings', 'home', 'options', 'other'];
        $scope.selection = $scope.example7List[0];

        //Example-8
        $scope.textChange = "Text";
        $timeout(function () {
            $scope.textChange = "Text changed";
        }, 1000);
        $timeout(function () {
            $scope.textChange = "Text changed 2";
        }, 2000);
        $scope.$watch('textChange', function () {
            console.log('textChanged()');
        });
    }
])

.animation('.dims', function () {
    return {
        enter: function (element, done) {
            element.css('display', 'none');
            $(element).fadeIn(1000, function () {
                done();
            });
        },
        leave: function (element, done) {
            $(element).fadeOut(1000, function () {
                done();
            });
        },
        move: function (element, done) {
            element.css('display', 'none');
            $(element).slideDown(500, function () {
                done();
            });
        }
    }
});