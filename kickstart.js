// Declaration
k$ = {
  $: function(el) {
    return this.$$(el)[0];
  },
  $$: function(el) {
    return document.querySelectorAll(el);
  },
  component: function(selectors, fn) {
    var selector = [""].concat((selectors).split(" ")).reduce(function(a, b) {
      return a + '[data-component~="' + b + '"]'
    });
    var $selector = k$.$(selector),
        getInScope = function(scoped_selector) {
          return $selector.querySelector(scoped_selector);
        },
        getInScopeMultiple = function(scoped_selector) {
          return $selector.querySelectorAll(scoped_selector);
        };
    return fn.call(this, getInScope, getInScopeMultiple);
  }
};
