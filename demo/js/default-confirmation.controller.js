(function() {
    'use strict';

    angular
        .module('confirmation')
        .controller('confirmSampleCtrl', confirmSampleCtrl);

    confirmSampleCtrl.$inject = ['Confirm'];

    /* @ngInject */
    function confirmSampleCtrl(Confirm) {
        var vm = this;
        vm.showConfirm = showConfirm;
        vm.showConfirmBind = showConfirmBind;

        function showConfirm() {
            var attr = {
                key: 1,// the value when he accept
                message: 'Enter your message'
            };

            var confirm = Confirm.show(attr);
            confirm.then(function(key) {
                // selected yes
                console.log('yes', key);
            }, function(){
                //selected no
                console.log('no');
            });
        }

        function showConfirmBind() {
            var attr = {
                key: 1,// the value when he accept
                message: 'Enter your message here with angular bind {{dmic.test}}',
                test: 'Yeah it works!',
                title: 'With Title Confirmation'
            };

            var confirm = Confirm.show(attr);
            confirm.then(function(key) {
                // selected yes
                console.log('yes', key);
            }, function(){
                //selected no
                console.log('no');
            });
        }
        //END OF FUNCTIONS
        // SCRIPTS TO DISPLAY

        vm.javascript = (
            "function confirmSampleCtrl(Confirm) {\n" +
            "    var vm = this;\n" +
            "    vm.showConfirm = showConfirm;\n" +
            "    function showConfirm() {\n" +
            "        var attr = {\n" +
            "            key: 1,// the value when he accept\n" +
            "            message: 'Enter your message here'\n" +
            "        };\n" +
            "\n" +
            "        var confirm = Confirm.show(attr);\n" +
            "        confirm.then(function(key) {\n" +
            "            // selected yes\n" +
            "            console.log('yes', key);\n" +
            "        }, function(){\n" +
            "            //selected no\n"+
            "            console.log('no');\n"+
            "        });\n" +
            "    }\n" +
            "}"
        );
        vm.html = (
          '<div> class = "col-md-12" ng-controller = "confirmSampleCtrl as csc"</div>\n' +
          '  <button class = "btn btn-default" ng-click = "csc.showConfirm()">Click Me!</button>\n' +
          '</div>'
        );
        vm.javascriptBind = (
            "function confirmSampleCtrl(Confirm) {\n" +
            "    var vm = this;\n" +
            "    vm.showConfirm = showConfirm;\n" +
            "    function showConfirm() {\n" +
            "        var attr = {\n" +
            "            key: 1,// the value when he accept\n" +
            "            message: 'Enter your message here with angular bind {{dmic.test}},'\n" +
            "            test: 'Yeah it works!'\n"+
            "        };\n" +
            "\n" +
            "        var confirm = Confirm.show(attr);\n" +
            "        confirm.then(function(key) {\n" +
            "            // selected yes\n" +
            "            console.log('yes', key);\n" +
            "        }, function(){\n" +
            "            //selected no\n"+
            "            console.log('no');\n"+
            "        });\n" +
            "    }\n" +
            "}"
        );
        vm.htmlBind = (
          '<div> class = "col-md-12" ng-controller = "confirmSampleCtrl as csc"</div>\n' +
          '  <button class = "btn btn-default" ng-click = "csc.showConfirmBind()">Click Me!</button>\n' +
          '</div>'
        );

    }
})();
