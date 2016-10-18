/**
*
* Angular Confirm Library
* @author TMJ Engineering.
*
* Created a default approach modal using modal bootstrap
* @copyright TMJ Philippines BPO Services Inc. 2016
*/

(function() {
    'use strict';

    angular
        .module('tmjModal')
        .controller('ConfirmModalInstanceCtrl', ConfirmModalInstanceCtrl);

    ConfirmModalInstanceCtrl.$inject = [
        '$uibModalInstance',
        'attr',
        '$compile',
        'MODAL_CONFIG',
        '$scope'
    ];

    /* @ngInject */
    function ConfirmModalInstanceCtrl($uibModalInstance, attr, $compile, MODAL_CONFIG, $scope) {
        var vm = this;
        Object.assign(vm, attr);

        // normally confirm has only buttons ok/cancel
        vm.ok = ok;
        vm.cancel = cancel;

        activate();

        function ok() {
            var result = attr.key;
            $uibModalInstance.close(result);
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        function activate() {
            if(vm.message)
                showMessage();
        }

        /**
         * It is expected you have a class .modal-body on your modal.
         */
        function showMessage() {
            // create an DOM of message
            vm.message = angular.element('<div>' + vm.message + '</div>');
            vm.message = $compile(vm.message[0])($scope);

            // after being rendered
            $uibModalInstance.rendered.then(function() {
                var elem = '.modal-body',
                body = document.querySelector(elem);

                if(!body)
                    return console.error(elem, MODAL_CONFIG.ERR_MSG.ELEM_NOT_FOUND);

                angular.element(body).append(vm.message);
            });
        }

    }
})();
