var angularHomepage = {
  nameInput: element(by.model('yourName')),
  greeting: element(by.binding('yourName')),
  get: function() { browser.get('http://www.angularjs.org'); },
  setName: function(name) { angularHomepage.nameInput.sendKeys(name); }
};

describe('angularjs homepage', function() {
  it('should greet the named user', function() {

    angularHomepage.get();
    angularHomepage.setName('Julie');
    expect(angularHomepage.greeting.getText()).toEqual('Hello Julie!');
  });
});