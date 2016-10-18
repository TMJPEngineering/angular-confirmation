/**
*
* Angular Confirm Library
* @author TMJ Engineering.
*
* Created a default confirm approach
* @copyright TMJ Philippines BPO Services Inc. 2016
*/

(function() {
    'use strict';

    angular
        .module('tmjConfirm', ['tmjModal'])
        .constant('CONFIRM_CONFIG', confirmConfig())
        .controller('ConfirmModalInstanceCtrl', ConfirmModalInstanceCtrl)
        .service('Confirm', Confirm)
        .run(confirmationTemplate);

    ConfirmModalInstanceCtrl.$inject = [
        '$uibModalInstance',
        'attr',
        '$compile',
        'MODAL_CONFIG',
        '$scope'
    ];

    Confirm.$inject = ['Modal', 'CONFIRM_CONFIG'];

    confirmationTemplate.$inject = ['$templateCache'];

    function confirmConfig() {
        return {
            'TEMPLATE': 'tmj-show/default/confirmation.html',
            'CONTROLLER': 'ConfirmModalInstanceCtrl',
            'CONTROLLERAS': 'default',
            'MESSAGE': ('Are you sure you want to {{default.action}}' +
                        ' <u>{{default.value}}</u>'),
            'TITLE': 'Confirmation',
            'MARK': '?',
            'ADD': {
                'TITLE': 'Add Confirmation',
                'ACTION': 'add'
            },
            'EDIT': {
                'TITLE': 'Edit Confirmation',
                'ACTION': 'edit'
            },
            'DELETE': {
                'TITLE': 'Delete Confirmation',
                'ACTION': 'delete'
            },
            'BTN': {
                'YES': 'Yes',
                'NO': 'No'
            }
        };
    }

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

    function Confirm(Modal, CONFIRM_CONFIG) {
        this.show = show;
        this.add = add;
        this.remove = remove;
        this.edit = edit;

        /**
        *  Add confirmation
        */
        function add(config) {
            config = config || {};

            // if not specified use default
            config.title = config.title || CONFIRM_CONFIG.ADD.TITLE;
            config.action = config.action || CONFIRM_CONFIG.ADD.ACTION;

            config.message = addMessage(config);

            return show(config);
        }

        /**
        *  Edit confirmation
        */
        function edit(config) {
            config = config || {};

            // if not specified use default
            config.title = config.title || CONFIRM_CONFIG.EDIT.TITLE;
            config.action = config.action || CONFIRM_CONFIG.EDIT.ACTION;

            config.message = addMessage(config);

            return show(config);
        }

        /**
        *  Delete confirmation
        */
        function remove(config) {
            config = config || {};

            // if not specified use default
            config.title = config.title || CONFIRM_CONFIG.DELETE.TITLE;
            config.action = config.action || CONFIRM_CONFIG.DELETE.ACTION;

            config.message = addMessage(config);

            return show(config);
        }

        function addMessage(config) {
            var message = '';
            // if there is an action and the value display the default message/ user message
            // user can also just set the message without this config action/value
            // action and value are only required on default confirm message
            if(config.action && config.value) {
                // add a question since value is always at the end
                // if it uses the default confirm message
                if(!config.message)
                    config.value +=CONFIRM_CONFIG.MARK;

                // if message is set to false it will inform the confirm ctrl
                // that there is no message to display maybe because there is a
                // user defined template
                message = (config.message || config.message == false) ? config.message:
                    CONFIRM_CONFIG.MESSAGE;
            }

            return message;
        }

        /**
        * this are required iff using default confirmation template
        * you can overwrite the template by specifying the templateUrl
        * and reserved words of ui bootstrap
        * config ={
        *       title : <title of confirmation> e.g. Delete/add/message
        *       action :  <action that will be done> e.g. delete
        *       value : <you're pertaining to>
        *       message : <message you want to display> (optional)
        *           if null it will used the default message
        *   }
        */
        function show(config) {
            Modal.checkConfig(config);

            // if templateUrl is not change or no resource it means using the default

            config.templateUrl = config.templateUrl || CONFIRM_CONFIG.TEMPLATE;
            config.controller = config.controller || CONFIRM_CONFIG.CONTROLLER;
            config.title = config.title || CONFIRM_CONFIG.TITLE;
            config.yesBtn = config.yesBtn || CONFIRM_CONFIG.BTN.YES;
            config.noBtn = config.noBtn || CONFIRM_CONFIG.BTN.NO;

            return Modal.open(config);
        }
    }

    function confirmationTemplate($templateCache) {
        $templateCache.put('tmj-show/default/confirmation.html',
            '<div class="modal-header">\n' +
              '<h3 class="modal-title">{{dmic.title}}</h3>\n' +
            '</div>\n' +
            '<div class="modal-body">\n' +
            //   '{{default.message}}\n' +
            '</div>\n' +
            '<div class="modal-footer">\n' +
              '<button class="btn btn-primary" type="button" ng-click="dmic.ok()">{{dmic.yesBtn}}</button>\n' +
              '<button class="btn btn-warning" type="button" ng-click="dmic.cancel()">{{dmic.noBtn}}</button>\n' +
            '</div>\n'
        );
    }
})();
