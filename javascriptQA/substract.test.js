const sub = require('./substract')

test('propperly substracts a numbers from the other',() =>{
    expect(sub(2,1)).toBe(1);
})