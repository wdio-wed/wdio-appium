var expect = require('chai').expect;

describe('Appium tests', function () {
  beforeEach(function () {
    browser.url('/');
  })

  it('should do something very cool', function () {
    var orientation = browser.getOrientation();

    console.log(orientation);

    browser.setOrientation('landscape');

    var orientation = browser.getOrientation();

    console.log(orientation);
  })

  it('should let you scroll the page', function () {
    browser.saveScreenshot('before-swipe.png');
    browser.swipeDown('body', 200,100);
    browser.saveScreenshot('after-swipe.png');
  })
})