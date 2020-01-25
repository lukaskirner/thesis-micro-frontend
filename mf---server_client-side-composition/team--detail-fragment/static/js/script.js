function addToBasket() {
	var newBasket = []
	var basket = localStorage.getItem('basket')
	if (basket) {
		newBasket = JSON.parse(basket)
	}

	var id = window.location.href.split('/').pop()
	newBasket.push(id)
	localStorage.setItem('basket', JSON.stringify(newBasket))

	// fire event
	var event = new CustomEvent("basket_update");
	document.dispatchEvent(event)
}
