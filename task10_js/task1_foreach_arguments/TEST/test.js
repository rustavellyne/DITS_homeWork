describe("testing of homeWork10", function() {

 describe("testing of argArray ", function() {
    it("ожидается из аргументов функции argArray(1,2,3,4,5)  получить массив [1,2,3,4,5]" , function() {
      assert.deepEqual(argArray(1,2,3,4,5), [1,2,3,4,5]);
    });
    it("ожидается из аргументов функции argArray(1,'2',{'asd':25},'asd',5) получить массив [1,'2',{'asd':25},'asd',5]" , function() {
      assert.deepEqual(argArray(1,'2',{'asd':25},'asd',5), [1,'2',{'asd':25},'asd',5]);
    });
    it("ожидается из аргументов функции argArray('1,2,3,4,5') получить массив ['1,2,3,4,5']" , function() {
      assert.deepEqual(argArray('1,2,3,4,5'), ['1,2,3,4,5']);
    });
    it("ожидается из аргументов функции argArray()  получить массив []" , function() {
      assert.deepEqual(argArray(), []);
    });

   

  });  

  
    //next test
});