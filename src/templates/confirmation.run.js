(function() {
    'use strict';

    angular
        .module('tmjConfirm')
        .run(confirmationTemplate);

    confirmationTemplate.$inject = ['$templateCache'];

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
