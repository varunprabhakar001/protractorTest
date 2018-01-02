describe('Home Page', function() {
  it('update password', function() {    	
browser.get('http://192.168.56.1');
	element(by.model('username')).sendKeys('admin');
	element(by.model('password')).sendKeys('pass');
	element(by.css('.btn-primary')).click();
	element(by.model('user.password')).clear().then(function() {
   		 element(by.model('user.password')).sendKeys('111111');
	})
	element(by.css('.btn-primary')).click();
	element(by.model('username')).sendKeys('admin');
	element(by.model('password')).sendKeys('111111');
	element(by.css('.btn-primary')).click();
	var firstName = element(by.model('user.firstname'));
	expect(firstName.evaluate(firstName.getAttribute('ng-model'))).toBe('admin');


  });
});