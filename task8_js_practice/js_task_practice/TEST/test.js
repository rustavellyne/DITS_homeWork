describe("testing of homeWork 8", function() {

 describe("testing of getCount", function() {
  var test1 = {a: "1", b: "2", c: "3"}
    it("ожидается из обьекта {a: '1', b: '2', c: '3'} длинна  === 3" , function() {
      assert.equal(getCount(test1), 3);
    });

    var test2 = function(){};
    it("ожидается из test2= function(){} длинна ===  0" , function() {
      assert.equal(getCount(test2), 0);
    });

    var test3 = [1,2,3,4];
    it("ожидается из test3= [1,2,3,4]  длинна === 4" , function() {
      assert.equal(getCount(test3), 4);
    });

    var test4 = []; test4[100] = 1;
    it("ожидается из test4[100]  длинна === 1" , function() {
      assert.equal(getCount(test4), 1);
    });
    //next test
  });

 describe("testing of getField", function() {
  var test = [
    {'firstName': 'sasha', 'secondName': 'cher'},
    {'firstName': 'olek', 'secondName': 'mlvsk'},
    {'firstName': 'vova', 'secondName': 'malugin'}
  ];

    it("ожидается из массива test массив значений по ключу firstName" , function() {
      assert.deepEqual(getField(test, 'firstName'), ['sasha','olek','vova']);
    });

    it("ожидается из массива test массив значений по ключу secondName" , function() {
      assert.deepEqual(getField(test, 'secondName'), ['cher','mlvsk','malugin']);
    });

    //next test
  });

 describe("testing of createCounter", function() {
  var counter1 = createCounter(10, 3);
  var counter2 = createCounter(7, 1);

  it("ожидается из counter1() первый запуск === 10" , function() {
    assert.equal(counter1(), 10);
  });
  it("ожидается из counter1() второй запуск === 13" , function() {
    assert.equal(counter1(), 13);
  });
  it("ожидается из counter2() первый запуск === 7" , function() {
    assert.equal(counter2(), 7);
  });
  it("ожидается из counter1() третий запуск === 16" , function() {
    assert.equal(counter1(), 16);
  });
  it("ожидается из counter2() второй запуск === 8" , function() {
    assert.equal(counter2(), 8);
  });
    //next test
  });

describe("testing of  pick(counter, x)", function() {
  var counter = createCounter(0, 2);

  it("ожидается из pick массив === [0,2,4,6,8]" , function() {
    assert.deepEqual(pick(counter, 5), [0,2,4,6,8]);
  });
    //next test
  });

describe("testing of map function", function() {
  var arr = [1,2,3,4]
  it("ожидается обработанный масив === [1,4,9,16]" , function() {
    assert.deepEqual(map(square, arr), [1,4,9,16]);
  });

  it("ожидается пустой массив" , function() {
    assert.deepEqual(map(square, []), []);
  });
    //next test
  });
//next description
});

describe("testing of  filter", function() {
  var inp = [1, 2, 3, 4, 5, 6];

  it("ожидается из [1, 2, 3, 4, 5, 6] удалить нечетные === [2, 4, 6]" , function() {
    assert.deepEqual(filter(inp, isEven), [2, 4, 6]);
  });
    //next test
  });