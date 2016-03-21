(function() {
  component = function(selector, fn) {
    var $selector = k$.$("[data-component~='" + selector + "']"),
        getInScope = function(scoped_selector) {
          return $selector.querySelectorAll(scoped_selector);
        }

    return fn.call(this, getInScope);
  }

  k$.component = component;

  module.exports = component;
}).call(this);
