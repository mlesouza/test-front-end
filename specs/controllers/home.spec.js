(function () {
    'use strict';

    describe('homeCtrl', function () {
        var vm = null, $scope = null, cacheServiceMock, homeServiceMock;

        beforeEach(module('linx-app'));
        beforeEach(module('cache'));


        beforeEach(inject(function ($controller, $rootScope, homeService, cacheService) {
            $scope = $rootScope.$new();
            homeServiceMock = homeService;
            cacheServiceMock = cacheService;

            vm = $controller('HomeCtrl', {
                $scope: $scope,
                homeService: homeServiceMock,
                cacheServiceMock: cacheServiceMock
            })

        }))

        it('Should HomeCtrl must be defined', function () {
            expect(vm).toBeDefined();
        })

        describe('getBreweriesList', function () {
            it('Should getBreweriesList must be defined', function () {
                expect(vm.getBreweriesList).toBeDefined();
            })

            it('Should getBreweriesList must be called', function () {
                vm.getBreweriesList(1, 20, 'micro')
            })
        })

        describe('breweriesList', function () {
            it('Should brewerieslist must be defined', function () {
                expect(vm.breweriesList).toBeDefined();
            })

            it('Should breweriesList must be called', function () {
                var response = {};
                vm.breweriesList(response);
            })
        })

        describe('breweriesListError', function () {
            it('Should breweriesListError must be defined', function () {
                expect(vm.breweriesList).toBeDefined();
            })

            it('Should breweriesListError must be called', function () {
                var error = {};
                vm.breweriesListError(error);
            })
        })

        describe('changeType', function () {
            it('Should brewerieslist must be defined', function () {
                expect(vm.changeType).toBeDefined();
            })

            it('Should breweriesList must be called', function () {
                vm.changeType();
            })
        })

    })
})();