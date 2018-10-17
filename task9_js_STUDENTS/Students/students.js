// Написати функцію-конструктор Student. 
// Студент має ім'я, прізвище і набір оцінок.
// student = {name: 'Alexey', surname: 'Petrov', grades: [3,3,3,4,5,6]}
// у об'єкта student має бути два методи fullName ()
//  і gradesAvarage () - середня оцінка


function Student(fName,sName, grades){
	this.fName = fName;
	this.sName = sName;
	this.grades = grades;
	//методы вывода полного имени и средний бал
	this.fullName = function() {
		console.log("Student - "+ this.fName + " " +this.sName);
	}
	this.gradesAvarage = function() {
		var averageNumber = this.grades.reduce(function(sum, cur){
			return sum + cur;
		},0);
		//console.log("avarage grade of " +this.sName +" "+ (averageNumber/this.grades.length).toFixed(2));
		return (averageNumber/this.grades.length).toFixed(2);
	} 

	// creating of static methods
	// запихиваем текущий обьект в масив который статичный
	Student.group.push(this); 

	//статический метод сортировки по сренему балу
	Student.sortAllStudents = function() {
		// присваеваем наш масив с обьектами студнтов новому, который будем сортировать
		var sortStudent = Student.group
		// сортируем через .sort с указанием функции сравнения
		Student.compareGrade = function(StudentA, StudentB) {
			//сосртировка в обратном порядке
  			return StudentB.gradesAvarage() - StudentA.gradesAvarage();
		};	
			return sortStudent.sort(Student.compareGrade);
 	}
// вывод всех студентов
	Student.showAllStudents = function(){
		var showAll = Student.sortAllStudents();
		showAll.forEach(function(item, index){
				console.log(index+1 + " Student--" + item.fName + " " + item.sName + "; his avarage grade = " + item.gradesAvarage());
			});
	}
// лучший студент
	Student.bestStudent = function(){
		return Student.sortAllStudents()[0];
	}
//  вывод лучшего студента
 	Student.showBestStudent = function (){
 		var bestStudent = Student.bestStudent();
 		console.log(bestStudent.fName + " " + bestStudent.sName + " best Student of the course. The average grade is " + bestStudent.gradesAvarage());
 	}
}

// статический свойство - массив
Student.group = [];


// результаты

// создаем обькты с помощью конструктора
var student1 = new Student ( 'Ivan', 'Ivanov',  [4,4,4]);
var student2 = new Student ( 'Semen', 'Semenov', [2,2,2]);
var student3 = new Student ( 'Kiril',  'Kirilov', [5,5,3]);
var student4 = new Student ( 'Petr',  'Petrov', [5,5,5]);
//метод полного имени
student1.fullName();
// средний бал студента
console.log(student1.gradesAvarage());
// вывод масива со студентами
console.log(Student.group);

// виводить модифікований список студентів.
// Виводиться повне ім'я студента і його середній бал
// При цьому цей список відсортований за середньою оцінкою.
Student.showAllStudents()
//  вывод лучшего студента по балам
Student.showBestStudent()
//  висновок просто об’єкт студента
console.log (Student.bestStudent())