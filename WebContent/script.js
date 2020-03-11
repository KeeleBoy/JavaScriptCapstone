let apple = {
	name : "apple",
	price : 5
};

let peach = {
	name : "peach",
	price : 10
};

let pear = {
	name : "pear",
	price : 15
};

let list = [];


let numApples = 0;
let numPeaches = 0;
let numPears = 0;
let total = 0;

function addApple() {
	// Step 1 find the element
	numApple = document.getElementById("numApples");
	theTotal = document.getElementById("total")
	// Step 2 modify the element
	numApples += 1;
	total += 5;
	list.unshift(apple);
	
	numApple.innerText = numApples;
	theTotal.innerText = total;
}

let appleButton = document.getElementById("appleButton");
appleButton.addEventListener("click", (event) => {
	addApple();

});

function addPeach() {
	// Step 1 find the element
	numPeach = document.getElementById("numPeaches");
	theTotal = document.getElementById("total")
	// Step 2 modify the element
	numPeaches += 1;
	total += 10;
	list.unshift(peach);
	
	numPeach.innerText = numPeaches;
	theTotal.innerText = total;
}

let peachButton = document.getElementById("peachButton");
peachButton.addEventListener("click", (event) => {
	addPeach();

});

function addPear() {
	// Step 1 find the element
	numPear = document.getElementById("numPears");
	theTotal = document.getElementById("total")
	// Step 2 modify the element
	numPears += 1;
	total += 15;
	list.unshift(pear);
	
	numPear.innerText = numPears;
	theTotal.innerText = total;
}

let pearButton = document.getElementById("pearButton");
pearButton.addEventListener("click", (event) => {
	addPear();

});

function displayList() {
	list.unshift(total);
	alert(JSON.stringify(list));
}

let checkoutButton = document.getElementById("checkoutButton");
checkoutButton.addEventListener("click", (event) => {
	displayList();

});


