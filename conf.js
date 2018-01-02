exports.config = {
 framework: 'jasmine',
allScriptsTimeout: 120000,
 seleniumAddress: 'http://localhost:4444/wd/hub',
 specs: [ 'login_test_spec.js', 'profile_test.spec.js'],
seleniumArgs: ['-Dwebdriver.ie.driver=C:/Windows/System32/IEDriverServer3.8.0.exe'],
 capabilities: {
       'browserName': 'internet explorer',
       'platform': 'ANY'
   }
}