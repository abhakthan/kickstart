KS        = require './ks'
Modal     = require './modal'
Navbar    = require './navbar'
Debounce  = require '../../core/js-alc/debouncer'
Icons     = require './icons'
Status    = require './status'
Tabs      = require './tabs'
Throttler = require './throttler'
Buttons   = require './buttons'
Buffer    = require './buffer'
Growl     = require './growl'
Dropdown  = require './dropdown'
ScopedComponent = require '../../core/js-alc/scoped_component'

k$.ready = ->
  k$.icons()
  k$.button()
  k$.dropdown()
  k$.nav($navbar) for $navbar in k$.$$('[data-ks-navbar]')
  k$.tabs($tabSet) for $tabSet in k$.$$('[data-ks-tabs]')

document.addEventListener 'DOMContentLoaded', -> k$.ready()
