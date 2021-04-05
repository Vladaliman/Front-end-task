const Navigation = {
	hamburger: document.querySelector('.js-nav-hamburger'),
	navList: document.querySelector('.js-nav-list'),
	navItems: document.querySelectorAll('.js-nav-item'),
	navLinkDrop: document.querySelector('.js-nav-link-drop'),
	navChevron: document.querySelector('.js-nav-chevron'),
	navDropList: document.querySelector('.js-nav-drop-list'),

	init: function () {
		this.bindEvents();
	},
	bindEvents: function () {
		const _this = this;

		if (window.innerWidth < 1000) {
			this.hamburger.addEventListener('click', function () {
				_this.navList.classList.toggle('nav__list--active');
				_this.hamburger.classList.toggle('open');
			});

			this.navItems.forEach(function (item) {
				item.addEventListener('click', function () {
					_this.hamburger.classList.remove('open');
					_this.navList.classList.remove('nav__list--active');
				});
			});
			this.navLinkDrop.addEventListener('click', function () {
				_this.navChevron.classList.toggle('nav__chevron--active');
				_this.navDropList.classList.toggle('nav__drop-list--active');
			});
			document.addEventListener('click', function (event) {
				var isClickInside = _this.navLinkDrop.contains(event.target);

				if (!isClickInside) {
					_this.navChevron.classList.remove('nav__chevron--active');
					_this.navDropList.classList.remove('nav__drop-list--active');
				}
			});
		}
	},
};
Navigation.init();


const Plugins = {
	init: function () {
		this.bindEvents();
	},
	bindEvents: function () {
		$('.js-carousel').slick({
			dots: true,
			prevArrow: '.carousel__prev',
			nextArrow: '.carousel__next',
			infinite: false,
			autoplay: true,
			autoplaySpeed: 5000,
			
		});
	},
};

Plugins.init();
const Contact = {
	jsInput: document.querySelector('.js-email'),
	jsPlaceholder: document.querySelector('.js-email-placeholder'),
	init: function () {
		this.bindEvents();
	},
	bindEvents: function () {
		const _this = this;

		this.jsInput.addEventListener('keyup', function () {
			if (_this.jsInput.value) {
				_this.jsPlaceholder.classList.add('contact__placeholder--active');
			} else {
				_this.jsPlaceholder.classList.remove('contact__placeholder--active');
			}
		});
	},
};
Contact.init();




// Get the modal
let modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// adding event to every button
document.querySelectorAll('.myBtn').forEach(item => {
	item.addEventListener('click', event => {
		modal.style.display = "block";
	  
	})
  })
//adding event listeners to the category li's
document.querySelectorAll('.promo_category').forEach(item => {
	item.addEventListener('click', event => {
		//removes the class from other elements and ads to the clicked one
		document.querySelectorAll('.promo_category').forEach(element => {
		element.classList.remove('active-category')});
		event.target.classList.add("active-category");
	  
	})
  })

//


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Modal pricee logic

	//event for the first selected option
$('#electircalSystem').on('change', function(e)  {
	//variables
	let startingPriceElement = document.getElementById("startingPrice");
	let startingPrice = startingPriceElement.getAttribute('data-price');
	startingPrice = parseFloat(startingPrice)

	let electircalSystem = document.getElementById('electircalSystem')
	let electroPrice = electircalSystem.getAttribute('data-price')
	electroPrice = parseFloat(electroPrice)

	if (electircalSystem.classList.contains("included")){
		let sum = startingPrice - electroPrice
		sum = parseFloat(sum).toFixed(3)
		startingPriceElement.setAttribute('data-price', `${sum} €`)
		startingPriceElement.textContent = (`${sum} €`)
		electircalSystem.classList.remove("included");
	}else{
		let sum = startingPrice + electroPrice
		sum = parseFloat(sum).toFixed(3)
		startingPriceElement.setAttribute('data-price', `${sum} €`)
		startingPriceElement.textContent = (`${sum} €`)
		electircalSystem.classList.add("included");
	}
})

$('#adaptiveAir').on('change', function(e)  {
	//variables
	let startingPriceElement = document.getElementById("startingPrice");
	let startingPrice = startingPriceElement.getAttribute('data-price');
	startingPrice = parseFloat(startingPrice)

	let adaptiveAir = document.getElementById('adaptiveAir')
	let adaptiveAirPrice = adaptiveAir.getAttribute('data-price')
	adaptiveAirPrice = parseFloat(adaptiveAirPrice)

	if (adaptiveAir.classList.contains("included")){
		let sum = startingPrice - adaptiveAirPrice
		sum = parseFloat(sum).toFixed(3)
		startingPriceElement.setAttribute('data-price', `${sum} €`)
		startingPriceElement.textContent = (`${sum} €`)
		adaptiveAir.classList.remove("included");
	}else{
		let sum = startingPrice + adaptiveAirPrice
		sum = parseFloat(sum).toFixed(3)
		startingPriceElement.setAttribute('data-price', `${sum} €`)
		startingPriceElement.textContent = (`${sum} €`)
		adaptiveAir.classList.add("included");
	}
})

$('#acousticWindows').on('change', function(e)  {
	//variables
	let startingPriceElement = document.getElementById("startingPrice");
	let startingPrice = startingPriceElement.getAttribute('data-price');
	startingPrice = parseFloat(startingPrice)

	let acousticWindows = document.getElementById('acousticWindows')
	let acousticWindowsPrice = acousticWindows.getAttribute('data-price')
	acousticWindowsPrice = parseFloat(acousticWindowsPrice)

	if (acousticWindows.classList.contains("included")){
		let sum = startingPrice - acousticWindowsPrice
		sum = parseFloat(sum).toFixed(3)
		startingPriceElement.setAttribute('data-price', `${sum} €`)
		startingPriceElement.textContent = (`${sum} €`)
		acousticWindows.classList.remove("included");
	}else{
		let sum = startingPrice + acousticWindowsPrice
		sum = parseFloat(sum).toFixed(3)
		startingPriceElement.setAttribute('data-price', `${sum} €`)
		startingPriceElement.textContent = (`${sum} €`)
		acousticWindows.classList.add("included");
	}
})

$('#acousticGlass').on('change', function(e)  {
	//variables
	let startingPriceElement = document.getElementById("startingPrice");
	let startingPrice = startingPriceElement.getAttribute('data-price');
	startingPrice = parseFloat(startingPrice)

	let acousticGlass = document.getElementById('acousticGlass')
	let acousticGlassPrice = acousticGlass.getAttribute('data-price')
	acousticGlassPrice = parseFloat(acousticGlassPrice)

	if (acousticGlass.classList.contains("included")){
		let sum = startingPrice - acousticGlassPrice
		sum = parseFloat(sum).toFixed(3)
		startingPriceElement.setAttribute('data-price', `${sum} €`)
		startingPriceElement.textContent = (`${sum} €`)
		acousticGlass.classList.remove("included");
	}else{
		let sum = startingPrice + acousticGlassPrice
		sum = parseFloat(sum).toFixed(3)
		startingPriceElement.setAttribute('data-price', `${sum} €`)
		startingPriceElement.textContent = (`${sum} €`)
		acousticGlass.classList.add("included");
	}
})

$('#abientalLed').on('change', function(e)  {
	//variables
	let startingPriceElement = document.getElementById("startingPrice");
	let startingPrice = startingPriceElement.getAttribute('data-price');
	startingPrice = parseFloat(startingPrice)

	let abientalLed = document.getElementById('abientalLed')
	let abientalLedPrice = abientalLed.getAttribute('data-price')
	abientalLedPrice = parseFloat(abientalLedPrice)

	if (abientalLed.classList.contains("included")){
		let sum = startingPrice - abientalLedPrice
		sum = parseFloat(sum).toFixed(3)
		startingPriceElement.setAttribute('data-price', `${sum} €`)
		startingPriceElement.textContent = (`${sum} €`)
		abientalLed.classList.remove("included");
	}else{
		let sum = startingPrice + abientalLedPrice
		sum = parseFloat(sum).toFixed(3)
		startingPriceElement.setAttribute('data-price', `${sum} €`)
		startingPriceElement.textContent = (`${sum} €`)
		abientalLed.classList.add("included");
	}
})