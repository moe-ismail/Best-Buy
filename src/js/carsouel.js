import productulity from "./productulity"
export default function carsouel(data) {

	for (let i=0; i < data.products.length; i++)
{
	  
	  let product = document.createElement("div");
	  let productContainer = document.getElementById("products"); 
	  let sku = data.products[i].sku;
	  let salePrice = data.products[i].salePrice;
      
      let key = data.products[i].sku;
      let value = data.products[i].salePrice;
      
   
      let button = document.createElement("button");
      button.setAttribute('data-sku', data.products[i].sku)
      button.setAttribute('data-price',data.products[i].salePrice)

	  product.innerHTML = 
	  `<h4> ${data.products[i].name} </h4>;
	  <img src="${data.products[i].largeFrontImage}"/>`;
	  productContainer.appendChild(product);
	  console.log(data.products[i]);
	  product.appendChild(button);
	  let text = document.createTextNode("Add to cart");
	  button.appendChild(text);
	  let $products = $('.products').flickity()
      

	 }

$('button').click(function (){
	let sku1 = $(this).data('sku');
     console.log(this)
	let price1 = $(this).data('price');
	productulity(price1,sku1);
    
     


	//$('product').data('data-sku', 'data-price');
	//$(document).trigger('data-attribute-changed');
 });

}	 
