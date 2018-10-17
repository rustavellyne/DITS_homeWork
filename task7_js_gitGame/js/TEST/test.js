describe("testing of homeWork", function() {

 describe("testing of cloneObj", function() {
    it("ожидаеется на выходе обькт", function() {
      assert.isTrue(typeof (cloneObj({x: 2, y: 3, })) === 'object');
    });
    var x = {x: 2, y: 3, z:{a: 1,b: 2} }
    it("ожидаеется копированеи обьекта", function() {
      assert.deepEqual(cloneObj(x), {x: 2, y: 3,z:{a: 1,b: 2}});
    });


  });

 describe("testing of Flaaten", function() {
    it("expected 1,2,3,4", function() {
      assert.sameMembers(flatten( [1,[[2],3],4] ), [1, 2, 3, 4]);
    });
  });

 describe("testing of BuubleSort", function() {

  var x = [6,2,3,5,1,4]
    it("sorting", function() {
      assert.sameMembers(sortBubble(x), [ 1, 2, 3, 4, 5, 6 ], 'same ordered members');
    });
  });
});
