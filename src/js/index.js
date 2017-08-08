/*import Cart from "./cart";*/
import request from "./bestbuy";
import carsouel from "./carsouel";
import productulity from "./productulity";

export default class App{
	constructor(){
	  this.initBBCall();

	}
	
	initBBCall () {
		request({url: "https://api.bestbuy.com/v1/products",api : "8ccddf4rtjz5k5btqam84qak"})
		.then(data => {
			 carsouel(data)  
		})


		.catch(error => {
			console.log("warning Christopher Robins... Error");
			console.log(error);
		});

	}


button () {
	$("button").on("click", () => {
		$(this);
		let sku = $('data-sku').data('mydata');
	//	let price = $('contains-price')

		productulity(sku,price);
	});
} 
}


let x = new App;