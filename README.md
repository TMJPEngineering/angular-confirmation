# Angular Confirmation
default confirmation approach using TMJ [angular-bootstrap-modal](https://github.com/TMJPEngineering/angular-bootstrap-modal)
and [angular-ui-bootstrap](https://github.com/angular-ui/bootstrap)

# Dependencies

- [Angular 1](https://angularjs.org/)
- [Angular UI Bootstrap](https://github.com/angular-ui/bootstrap)
- [TMJ Angular Modal](https://github.com/TMJPEngineering/angular-bootstrap-modal)

# Installation

    npm install angular-confirmation

# Usage

For now please see demo after you clone for usage.

## Adding dependency to your project

Be sure to add the module dependency of this library `tmjConfirm`.

    angular.module('myModule', ['tmjConfirm']);

## Services

You should inject the `Confirm` service for you to use the feature of this library.

    Controller.$inject = ['Confirm'];

    function Controller(Confirm) {

    }

Service Functions
- `Confirm.show()` - default showing of confirmation
- `Confirm.add()` - same with `Confirm.show()` but by default specified title & action as `add`
- `Confirm.edit()` - same with `Confirm.show()` but by default specified title & action as `edit`
- `Confirm.remove()` - same with `Confirm.show()` but by default specified title & action as `delete`

Note: Changing alias of controller will conflict the template/ If changing the alias you should provide or change the template
# To Fix
When changing the alias of the controller the default template calling must also be change.

# TODO

- Documentation
- Test Scripts

# License

[MIT](https://github.com/TMJPEngineering/angular-confirmation/blob/master/LICENSE)
