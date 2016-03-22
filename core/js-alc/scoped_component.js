(function() {
  component = function(selector, fn) {
    var $selector = k$.$("[data-component~='" + selector + "']");
    var elementsInScope = function(scoped_selector) {
      return $selector.querySelectorAll(scoped_selector);
    };
    var singleElementInScope = function(scoped_selector) {
      return $selector.querySelector(scoped_selector);
    };

    fn(singleElementInScope, elementsInScope);
  }

  k$.component = component;

  module.exports = component;
}).call(this);
