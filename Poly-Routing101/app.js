var app = document.querySelector('#app');

// Define routes
page('/', home);
page('/portfolio', portfolio);
page('/contact', contact);

// Configure
page({ hashbang: true });

function home() {
	app.route = 'home';
}

function portfolio() {
	app.route = 'portfolio';
}

function contact() {
	app.route = 'contact';
}
