(function() {
    'use strict';

    angular
        .module('tmjConfirm')
        .service('Confirm', Confirm);

    Confirm.$inject = ['Modal', 'CONFIRM_CONFIG'];

    /* @ngInject */
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
})();
