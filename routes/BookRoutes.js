const bookServices = require("../services/BookService");
const router = require("express").Router();

router.get("/", async (req, res) => {
    try {
        res.json(await bookServices.getBooks());
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;