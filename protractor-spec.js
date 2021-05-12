describe('Testing protractor', function() {

    var input =  element(by.name('q'));
    var btnBuscar = element.all(by.name('btnK')).first();

    it('Open browser', function() {
      browser.waitForAngularEnabled(false);
      browser.get('https://www.google.com/');
    
      input.click();
      input.sendKeys("Hola mundo");
      browser.sleep(1000);
      btnBuscar.click();
      browser.sleep(10000);
    });
  });

  