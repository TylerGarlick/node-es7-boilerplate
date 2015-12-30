'use strict';

import Lib from '../lib';

describe('Dummy Test', () => {

  it('should pass', () => {
    expect(true).to.be.ok;
  });

  it('should greet', () => {
    expect(Lib.greet()).to.be.equal('Hello World');
  });

});
