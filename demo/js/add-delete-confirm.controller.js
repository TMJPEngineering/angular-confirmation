(function() {
    'use strict';

    angular
        .module('confirmation')
        .controller('addDeleteConfirmSampleCtrl', addDeleteConfirmSampleCtrl);

    addDeleteConfirmSampleCtrl.$inject = ['Confirm'];

    /* @ngInject */
    function addDeleteConfirmSampleCtrl(Confirm) {
        var vm = this;
        vm.showConfirm = showConfirm;
        vm.showConfirmBind = showConfirmBind;
        vm.showDeleteConfirm = showDeleteConfirm;

        function showConfirm() {
            var attr = {
                key: 1,// the value when he accept
                value: 'Hello World'// name of the value to pertaining to
            };

            var confirm = Confirm.add(attr);
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
                message: 'My new message pertaining to <u>{{default.value}}</u> and other added {{ default.value2}}',
                value: 'Hello World',
                value2: 'Rej'
            };

            var confirm = Confirm.add(attr);
            confirm.then(function(key) {
                // selected yes
                console.log('yes', key);
            }, function(){
                //selected no
                console.log('no');
            });
        }

        function showDeleteConfirm() {
            var attr = {
                key: 1,// the value when he accept
                value: 'Hello World'// name of the value to pertaining to
            };

            var confirm = Confirm.remove(attr);
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
            "function addDeleteConfirmSampleCtrl(Confirm) {\n" +
            "    var vm = this;\n" +
            "    vm.showConfirm = showConfirm;\n" +
            "    function showConfirm() {\n" +
            "        var attr = {\n" +
            "            key: 1,// the value when he accept\n" +
            "            value: 'Hello World'// name of the value to pertaining to'\n" +
            "        };\n" +
            "\n" +
            "        var confirm = Confirm.add(attr);\n" +
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
          '<div> class = "col-md-12" ng-controller = "addDeleteConfirmSampleCtrl as adsc"</div>\n' +
          '  <button class = "btn btn-default" ng-click = "adsc.showConfirm()">Click Me!</button>\n' +
          '</div>'
        );
        vm.javascriptDelete = (
            "function addDeleteConfirmSampleCtrl(Confirm) {\n" +
            "    var vm = this;\n" +
            "    vm.showDeleteConfirm = showDeleteConfirm;\n" +
            "    function showDeleteConfirm() {\n" +
            "        var attr = {\n" +
            "            key: 1,// the value when he accept\n" +
            "            value: 'Hello World'// name of the value to pertaining to'\n" +
            "        };\n" +
            "\n" +
            "        var confirm = Confirm.remove(attr);\n" +
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
        vm.htmlDelete = (
          '<div> class = "col-md-12" ng-controller = "addDeleteConfirmSampleCtrl as adsc"</div>\n' +
          '  <button class = "btn btn-default" ng-click = "adsc.showDeleteConfirm()">Click Me!</button>\n' +
          '</div>'
        );
        vm.javascriptBind = (
            "function addDeleteConfirmSampleCtrl(Confirm) {\n" +
            "    var vm = this;\n" +
            "    vm.showConfirmBind = showConfirmBind;\n" +
            "    function showConfirmBind() {\n" +
            "        var attr = {\n" +
            "            key: 1,// the value when he accept\n" +
            "            message: 'My new message pertaining to <u>{{default.value}}</u>'+\n"+
            "                     'and other added {{ default.value2}}',\n" +
            "            value: 'Hello World',\n" +
            "            value2: 'Rej'\n" +
            "        };\n" +
            "\n" +
            "        var confirm = Confirm.add(attr);\n" +
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
          '<div> class = "col-md-12" ng-controller = "addDeleteConfirmSampleCtrl as adsc"</div>\n' +
          '  <button class = "btn btn-default" ng-click = "adsc.showConfirmBind()">Click Me!</button>\n' +
          '</div>'
        );

    }
})();
