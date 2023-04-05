const uncapitalize = require('./uncapitalize.js');

describe('As a user I want a way to uncapitalize my strings', () => {

  test('Should uncapitalize a string', () => {
    let output = uncapitalize('Nate');
    expect(output).toEqual('nate');
  });
  
});
