describe("operations", function() {

  it("operation of 2 add 3 equal 5", function() {
    assert.equal(operations.add(2, 3), 5);
  });

  it("operation of 2 multiply 3 equal 6", function() {
  	assert.equal(operations.multiply(2, 3), 6)
  });

  it("operation of 9 substract 3 equal 6", function() {
  	assert.equal(operations.substract(9, 3), 6)
  });

  it("operation of 9 divide 3 equal 3", function() {
  	assert.equal(operations.divide(9, 3), 3)
  });
});
