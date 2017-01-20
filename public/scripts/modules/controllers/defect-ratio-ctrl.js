define(['angular', '../app-module'], function (angular) {
    'use strict';

    // Controller definition
    angular.module('app.module')
        .controller('DefectRatioCtrl', DefectRatioCtrl);
    DefectRatioCtrl.$inject = ['$scope'];

    function DefectRatioCtrl ($scope){
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

        $scope.graphData = {
            
        }
    }
});