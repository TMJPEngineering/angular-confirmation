(function() {
    'use strict';

    var confirmConfig = {
        'TEMPLATE': 'tmj-show/default/confirmation.html',
        'CONTROLLER': 'ConfirmModalInstanceCtrl',
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

    angular.module('tmjConfirm')
        .constant('CONFIRM_CONFIG', confirmConfig);
})();
