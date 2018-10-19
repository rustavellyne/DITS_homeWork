/*

Модифицируйте класс Employee из предыдущей задачи
 следующим образом: сделайте все его свойства приватными,
  а для их чтения сделайте методы-геттеры.

  Модифицируйте класс Employee из предыдущей задачи следующим образом: 
  для свойства salary и для свойства period сделайте еще и методы-сеттеры.

*/

function Employee(firstName_, secondName_, salary_, period_){
	var firstName = firstName_;
	var secondName = secondName_;
	var salary = salary_;
	var period = period_;

	Object.defineProperty(this, "getFirstName", {
    get: function() {
      return firstName;
    },

    set: function(value) {
      return firstName = value
    }
  });

  Object.defineProperty(this, "getSecondName", {
    get: function() {
      return secondName;
    },

    set: function(value) {
      return secondName = value
    }
  });

  Object.defineProperty(this, "getSalary", {
    get: function() {
      return salary;
    },

    set: function(value) {
      return salary = value
    }
  });

  Object.defineProperty(this, "getPeriod", {
    get: function() {
      return period;
    },

    set: function(value) {
      return period = value
    }
  });

	
// 	this.getFirstName = function(){
// 		return firstName;
// 	}
// 	this.getSecondName = function(){
// 		return secondName;
// 	}

// 	this.setSalary = function(salary_){
// 		return salary = salary_;
// 	}

// 	this.getSalary = function(){
// 		return salary;
// 	}

// 	this.setPeriod = function(period_){
// 		return period = period_;
// 	};

// 	this.getPeriod = function(){
// 		return period;
// 	};

// 	this.getRank = function(){
// 	return ((this.getSalary()) / 30) * this.getPeriod();
// };
	Employee.count += this.getRank();
	Employee.showCount = function(){
		console.log(Employee.count);
	}

}


Employee.prototype.getRank = function(){
 	return ((this.getSalary / 30) * this.getPeriod)};

Employee.count = 0;




var empl1 = new Employee("Sasha", "Chernyakov", 5000, 762);
var empl2 = new Employee("Alex", "Figov", 6000, 362);

// console.log("period rabotu == " + empl1.getPeriod());
// empl1.setPeriod(365)
// console.log("period rabotu == " + empl1.getPeriod());

console.log(empl1);
console.log(empl1.getFirstName);
console.log(empl1.getRank());
empl1.getFirstName = "marina";
console.log(empl1.getFirstName)
console.log(Employee.count);

console.log("====================")

console.log(empl2);
console.log(empl2.getFirstName);
console.log(empl2.getRank());
empl2.getFirstName = "marina";
console.log(empl2.getFirstName)
console.log(Employee.count);