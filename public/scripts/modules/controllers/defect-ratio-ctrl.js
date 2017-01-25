define(['angular', '../app-module','bootstrap-select'], function (angular) {
    'use strict';

    // Controller definition
    angular.module('app.module')
        .controller('DefectRatioCtrl', DefectRatioCtrl);
    DefectRatioCtrl.$inject = ['$scope', '$timeout', '$window'];

    function DefectRatioCtrl ($scope, $timeout, $window){
        $scope.dashboardHeaderData = {
            header: 'Defect Ratio Dashboard',
            list : [
                'Includes fundamental information regarding debrief defects',
                'Slicers are for filtering the defects based on region, LCT, modality and role',
                'See percentages of debrief defects in monthly basis, based on PAT requirements',
                'Find out most common problems in debriefs and specific deficiencies',
                'Make the problems visible, take action'
            ]
        };

        $scope.openNav = function () {
            document.getElementById("mySidenav").style.width = "300px";
        }

        $scope.closeNav = function () {
            document.getElementById("mySidenav").style.width = "0";
        }

        $scope.searchSelectAllModel = []; 
        $scope.searchSelectAllData = [ 
            {id: 1, label: "DavidDavidDavidDavidDavidDavidDavidDavidDavidDavid DavidDavidDavidDavid"},
            {id: 2, label: "Jhon"},
            {id: 3, label: "Danny"}
        ];
        $scope.searchSelectAllSettings = {
            enableSearch: true,
            showSelectAll: true,
            keyboardControls: true,
            styleActive: true,
            scrollableHeight: '300px',
	        scrollable: true
        };

        $scope.defectRatioGraphsFilter = {
            filterCard1: {
                show: false,
                showContent: false,
                style: {
                    visibility: 'hidden'
                }
            },
            filterCard2: {
                show: false,
                showContent: false,
                style: {
                    visibility: 'hidden'
                }
            },
            filterCard3: {
                show: false,
                showContent: false,
                style: {
                    visibility: 'hidden'
                }
            }
        }

        $scope.graphFilter = function (graphCard, filterCard) {
            var parentCard = document.getElementsByClassName(graphCard)[0],
                childCard = document.getElementsByClassName(filterCard)[0];
            $scope.defectRatioGraphsFilter[filterCard]['show'] = !$scope.defectRatioGraphsFilter[filterCard]['show']; 
            if($scope.defectRatioGraphsFilter[filterCard]['show']) {
                $scope.defectRatioGraphsFilter[filterCard]['style'] = {
                    height: parentCard.offsetHeight+'px',
                    width: parentCard.offsetWidth+'px',
                    top: parentCard.offsetTop+'px',
                }
                $timeout(function () {
                    $scope.defectRatioGraphsFilter[filterCard]['showContent'] = !$scope.defectRatioGraphsFilter[filterCard]['showContent'];
                }, 450);
            } else {
                $scope.defectRatioGraphsFilter[filterCard]['showContent'] = !$scope.defectRatioGraphsFilter[filterCard]['showContent']
                $scope.defectRatioGraphsFilter[filterCard]['style'] = {
                    height: 0+'px',
                    width: 0+'px'
                }
                 $timeout(function () {
                    $scope.defectRatioGraphsFilter[filterCard]['style']['visibility'] = 'hidden';
                }, 400);
            }
        }

        // $window.onclick = function(event) {
        // }
    }
});