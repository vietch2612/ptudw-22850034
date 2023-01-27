const express = require('express');

const app = express();

// Middleware
myMiddleware = (_request, response, next) => {
	console.log('Hello from my middleware');
	response.locals.message = 'this is my message';
	next();
};

app.use(myMiddleware);

app.use((_request, response, next) => {
	console.log('Middleware 2');
	console.log(response.locals.message);
	next();
});

// Route
const hbs = require('express-handlebars');
const productsRouter = require('./routes/products');

app.use('/products', productsRouter);

// Static files
app.use(express.static(__dirname + '/public'));
// Lib
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/propper.js/dist'));
// Theme
app.use('/js', express.static(__dirname + '/js'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/css', express.static(__dirname + '/css'));

// Express handlebars
app.engine('hbs', hbs.engine({
	extname: 'hbs',
	defaultLayout: 'layout',
	layoutsDir: __dirname + '/views/layouts',
	partialsDir: __dirname + '/views/partials',
}));

app.set('view engine', 'hbs');

app.get('/test', (_request, res) => {
	res.render('index');
});

// App.get('/', (request, res) => {
// 	res.send('Hello from Express JS');
// });

// app.get('/json', (request, res) => {
// 	const json = {
// 		name: 'Viet',
// 		age: 'Cao',
// 	};
// 	res.json(json);
// });

// Regular expression
// app.get('/ab+', (_, res) => {
// 	res.send('return from /ab+');
// });

// app.get('/ab', (reg, res) => {
// 	res.send('return from /ab');
// });

// app.get('/ab?', (request, res) => {
// 	res.send('return from /ab?');
// });

// app.get('/products/!:from-:to', (request, res) => {
// 	res.send(request.params);
// });

// error handling
// 404
app.use((_request, response) => {
	response.status(404).send('Error: Request not found!');
});

// 500
app.use((error, _request, response, _next) => {
	console.log(error);
	response.status(500).send('Error: Internal Server Error!');
});

app.listen(8001, () => {
	console.log('Server is listening on the port 8000...');
});
