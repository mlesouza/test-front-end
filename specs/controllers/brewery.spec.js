(function () {
    'use strict';

    describe('breweryCtrl', function () {
        var vm = null, $scope = null, breweryServiceMock;

        beforeEach(module('linx-app'));
        beforeEach(module('cache'));


        beforeEach(inject(function ($controller, $rootScope, breweryService) {
            $scope = $rootScope.$new();
            breweryServiceMock = breweryService;

            vm = $controller('BreweryCtrl', {
                $scope: $scope,
                breweryServiceMock: breweryServiceMock,
            })

        }))

        it('Should HomeCtrl must be defined', function () {
            expect(vm).toBeDefined();
        })

        describe('brewery', function () {
            it('Should brewery must be defined', function () {
                expect(vm.brewery).toBeDefined();
            })

            it('Should brewery must be called', function () {
                var response = {
                    data: {
                        latitude: "",
                        longitude: ""
                    }
                };

                vm.brewery(response);
            })
        })

        describe('breweryError', function () {
            it('Should breweryError must be defined', function () {
                expect(vm.breweryError).toBeDefined();
            })

            it('Should breweryError must be called', function () {
                var error = {};
                vm.breweryError(error);
            })
        })

        describe('go', function () {
            it('Should go must be defined', function () {
                expect(vm.go).toBeDefined();
            })

            it('Should go must be called', function () {
                vm.go();
            })
        })

    })
})();