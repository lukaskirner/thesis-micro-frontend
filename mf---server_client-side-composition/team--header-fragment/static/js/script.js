document.addEventListener("basket_update", function() {
	var basket = localStorage.getItem("basket")
	if (basket) {
		document.getElementById("basket_count").innerHTML = JSON.parse(basket).length
	}
});

var event = new CustomEvent("basket_update");
document.dispatchEvent(event)
