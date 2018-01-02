describe('Login Screen', function() {
  it('invalid credentials', function() {
	
	browser.get('http://192.168.56.1');
	element(by.model('username')).sendKeys('admin1');
	element(by.model('password')).sendKeys('fail');
	element(by.css('.btn-primary')).click();
	var failureMessage = element(by.css('.alert-danger'));
	expect(failureMessage.isPresent()).toBe(true);		
  });
  it('user login', function() {
	browser.get('http://192.168.56.1');
	element(by.model('username')).sendKeys('admin');
	element(by.model('password')).sendKeys('pass');
	element(by.css('.btn-primary')).click();
	var homePage = element(by.xpath('/html/body/div/div/div[2]/div/h3'));
	expect(homePage.isPresent()).toBe(true);		
  });
});