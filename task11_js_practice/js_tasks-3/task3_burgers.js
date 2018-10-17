/**
 * Создает экземпляр Burger.
 *
 * @constructor
 * @this  {Burger}
 * @param {string} sizeBurger - строка (ключ) для получения размера бургера
 * @param {array of strings} stuffing - может быть массив начинок
 * @param {array of strings} topping - масив добавок, необязательный параметр  
 */

function Burger(sizeBurger, stuffing, topping = ['TOPPING_WITHOUT']){

	var menu =  {
		SIZE_SMALL : {
			price: 50,
			calories: 40 
		},

		SIZE_BIG : {
			price: 100,
			calories: 60
		}
	};

	var stuff = {
		STUFF_CHEESE: {
			price:10,
			calories: 20
		},
		STUFF_SALAD: {
			price: 20,
			calories: 5
		},
		STUFF_POTATO: {
			price: 15,
			calories: 10
		}
	};

	var toppings = {
		TOPPING_WITHOUT:{
			price: 0,
			calories: 0
		},
		TOPPING_SPICES:{
			price: 15,
			calories: 0
		},
		TOPPING_MAYO: {
			price: 20,
			calories: 5
		}
	};

	this.sizeBurger = sizeBurger;
	this.stuffing = stuffing; //may be array
	this.topping = topping;		//may not to be


/**
 * Подсчитывает сумму цен
 * @private
 * @param {string} input - ключ который дает доступ до стоимости бургера
 * @param {object} thisData - обьект с данными
 */
	function arraySummPrice(input, thisData){
		return summ = input.reduce(function(prev, curr){
			return  prev + thisData[curr].price; 
		}, 0); 
	}

/**
 * Подсчитывает сумму калорий
 * @private
 * @param {string} input - ключ который дает доступ до калорий бургера
 * @param {object} thisData - обьект с данными
 */

	function arraySummCallories(input, thisData){
		return summ = input.reduce(function(prev, curr){
			return  prev + thisData[curr].calories; 
		}, 0); 
	}

/**
 * метод получения цены у обьекта
 * 
 * @this { Burger}
 */

	this.getPrice = function (){
		var price = menu[this.sizeBurger].price + arraySummPrice(this.stuffing, stuff) + arraySummPrice(this.topping, toppings);
		console.log("Burger cost = "+ price);
	}
/**
 * метод получения калорий у обьекта
 * @this { Burger}
 * 
 */
	this.getCalories = function (){
		var calories = menu[this.sizeBurger].calories + arraySummCallories(this.stuffing, stuff) + arraySummCallories(this.topping, toppings);
		console.log("Burger calories = "+ calories);
	}
/**
 * метод покупки обьекта
 * 
 * 
 */
	this.buy = function(){
		this.getCalories();
		this.getPrice();
	}

}

var burger1 = new Burger('SIZE_BIG',['STUFF_SALAD'],['TOPPING_MAYO','TOPPING_SPICES']);
var burger2 = new Burger('SIZE_SMALL',['STUFF_SALAD','STUFF_CHEESE'],['TOPPING_MAYO','TOPPING_SPICES']);
burger1.buy();
burger2.buy()
