(function () {
    'use strict';

    describe('listBreweriesCtrl', function () {
        var vm = null, $scope = null;

        beforeEach(module('linx-app'));


        beforeEach(inject(function ($controller, $rootScope) {
            $scope = $rootScope.$new();

            vm = $controller('ListBreweriesCtrl', {
                $scope: $scope,
            })

        }))

        it('Should ListBreweriesCtrl must be defined', function () {
            expect(vm).toBeDefined();
        })

        describe('go', function () {
            it('Should go must be defined', function () {
                expect($scope.go).toBeDefined();
            })

            it('Should go must be called', function () {
                $scope.go('path');
            })
        })
    })
})();