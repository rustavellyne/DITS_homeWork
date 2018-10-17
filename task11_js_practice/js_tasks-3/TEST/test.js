describe("testing of homeWork11", function() {

 describe("testing of partial ", function() {
  
    it("при введенных аргументах ожидается 6" , function() {
      expect(add5(1)).to.equal(6);
    });

    it("при введенных 2  аргументах ожидается 7" , function() {
      expect(add5(1, 1)).to.equal(7);
    });

    it("при введенных аргументах ожидается 13" , function() {
      expect(add5(8)).to.equal(13);
    });

    it("при введенных 3 аргументах ожидается 17" , function() {
      expect(add5(8,1,3)).to.equal(17);
    });
   //next
  });  
  describe("testing of partial UPDATE", function() {

    it("при введенных аргументах ожидается 'a=1,b=5,c=3" , function() {
      expect(partialDeep(testFunc, 1, undefined, 3)(5)).to.equal('a=1,b=5,c=3');
    });

    it("при введенных аргументах ожидается 'a=5,b=1,c=3'" , function() {
      expect(partialDeep(testFunc, null, 1, 3)(5)).to.equal('a=5,b=1,c=3');
    });
    //next test
  });  

  
});