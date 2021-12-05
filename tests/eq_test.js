import eq from '../src/eq.js';

const object = { 'a': 1 }
const other = { 'a': 1 }
//check

it("object and object -> true?", function(){
    expect(true).toBe(eq(object, object));
})
it("object and other -> false?", function(){
    expect(false).toBe(eq(object, other));
})
it("integers 1 and 1 -> true?", function(){
    expect(true).toBe(eq(1, 1));
})
it("string \"asd\" and \"asd\" -> true?", function(){
    expect(true).toBe(eq("asd", "asd"));
})
it("boolean true and integer 1 -> false?", function(){
    expect(false).toBe(eq(true, 1));
})
it("NaN and NaN -> true?", function(){
    expect(true).toBe(eq(NaN, NaN));
})
it("+0 and -0 -> true?", function(){
    expect(true).toBe(eq(+0, -0));
})
it("-0 and +0 -> true?", function(){
    expect(true).toBe(eq(-0, +0));
})
it("1 and 2 -> false?", function(){
    expect(false).toBe(eq(1, 2));
})
it("int and string -> false?", function(){
    expect(false).toBe(eq(1, "2"));
})