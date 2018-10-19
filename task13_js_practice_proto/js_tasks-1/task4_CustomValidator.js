/*

Реализуйте класс CustomValidator, который будет проверять строки.
 К примеру, у него будет метод checkEmail
  параметром принимает строку и проверяет, 
  является ли она корректным емейлом или нет.
  Если является - возвращает true, если не является - то false.
  Кроме того, класс будет иметь следующие методы: 
  метод checkDomain для проверки домена, метод checkDate для проверки даты 
  и метод checkPhone для проверки телефона

*/

function CustomValidator(){
	CustomValidator.checkEmail = function(email){
		var mailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  		console.log(mailReg.test(email));
	}
	CustomValidator.checkDomain = function(domain){
		var domainReg  = /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/; 
    	console.log(domainReg.test(domain));
	}
	CustomValidator.checkDate = function(date){
		var dateReg = /^\d{2}[./-]\d{2}[./-]\d{4}$/; 
    	console.log(dateReg.test(date));
	}
	CustomValidator.checkPhone = function(phone){
		var phoneReg = /^\+?([0-9]{4})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/; 
    	console.log(phoneReg.test(phone));
	}

}

var n1 = new CustomValidator();


CustomValidator.checkEmail("s@asdasdasdasd.com");
CustomValidator.checkDomain("123asdasd.com.ua");
CustomValidator.checkDate("03-12-2003");
CustomValidator.checkPhone("+380930020526");
