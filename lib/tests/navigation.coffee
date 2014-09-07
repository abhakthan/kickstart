assert = require("chai").assert
expect = require("chai").expect

describe 'k$.nav()', ->
  it 'should return a DOM element', ->
    expect(k$.nav('#test-nav')).to.be.a('object')
  it 'should open submenus on click', ->
    expect(k$.$('#test-nav #test-nav-submenu').style.display).to.not.equal('block')
    k$.testClick k$.$ '#test-nav #test-nav-submenu-link'
    expect(k$.$('#test-nav #test-nav-submenu').style.display).to.equal('block')
  it 'should close when clicking outside', ->
    expect(k$.$('#test-nav #test-nav-submenu').style.display).to.equal('block')
    k$.testClick document.body
    expect(k$.$('#test-nav #test-nav-submenu').style.display).to.not.equal('block')
