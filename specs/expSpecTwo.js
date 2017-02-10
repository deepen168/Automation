describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    // Load the AngularJS homepage.
    browser.get('http://www.angularjs.org').then(function(){
        console.log("in expSpecTwo");
    });
    browser.sleep(2000);
  });
});
