const app = require("./loaders/AppLoader");
const booksRouter = require("./routes/BookRoutes");

app.use('/allBooks', booksRouter);


