const dbAccessor = require('../data_access/db');

async function getBooks(offset = 0, amount = 20) {
    results = await dbAccessor.performQuery("SELECT * FROM books");
    return results;
}

module.exports = {
    getBooks
};