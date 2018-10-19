/*Реализуйте класс Employee, который будет иметь следующие свойства: 
first name, second name, salary, period (количество отработанных дней). 
////////////////////////////////////////////////////
Также класс должен иметь метод getSalary(), 
который будет выводить зарплату работника. 
////////////////////////////////////////
Зарплата - это произведение (умножение)
 ставки rate на количество отработанных дней days.
 //////////////////////////////////////////
 С помощью класса создайте двух рабочих и найдите сумму их зарплат.
*/

function Employee(firstName, secondName, salary, period){
	this.firstName = firstName;
	this.secondName = secondName;
	this.salary = salary;
	this.period = period;

	Employee.count += this.getSalary();
	Employee.showCount = function(){
		console.log(Employee.count);
	}
	
}

Employee.count = 0;

Employee.prototype.getSalary = function(){
	return (this.salary / 30) * this.period;
}

var empl1 = new Employee("Sasha", "Chernyakov", 5000, 762);
var empl2 = new Employee("Alex", "Figov", 6000, 362);


console.log(empl1.getSalary())
console.log(empl2.getSalary())

Employee.showCount()

