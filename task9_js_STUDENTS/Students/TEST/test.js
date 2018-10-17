describe("testing static function  of Students constructor", function() {

 describe("testing of grades avarage ", function() {
    it("ожидается из обьекта student1 средний бал  === 4.00" , function() {
      assert.equal(student1.gradesAvarage(), 4.00);
    });

    it("ожидается из обьекта student2 средний бал  === 2.00" , function() {
      assert.equal(student2.gradesAvarage(), 2.00);
    });

    it("ожидается из обьекта student3 средний бал  === 4.33" , function() {
      assert.equal(student3.gradesAvarage(), 4.33);
    });

  });  

 describe("testing of bestStudent ", function() {
    it("ожидается из получить обьект из массива" , function() {
      assert.deepEqual(Student.bestStudent(), student4);
    });

    

  });  
    //next test
});