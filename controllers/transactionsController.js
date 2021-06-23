const transactionsController = require("express").Router();
const transactionsArr = require("../models/transaction.js");

transactionsController.get("/", (req, res) => {
    res.json(transactionsArr);
})

transactionsController.get("/:id", (req, res) => {
    const { id } = req.params;
    if (transactionsArr[id]) {
        res.json(transactionsArr[id]);
    } else {
        res.redirect("/404")
    }
}); 

transactionsController.post("/", (req, res) => {
    transactionsArr.push(req.body);
    res.json(transactionsArr[transactionsArr.length - 1]);
});

transactionsController.delete("/:id", (req, res) => {
    const { id } = req.params;
    if (transactionsArr[id]) {
        const deletedTransaction = transactionsArr.splice(id, 1);
        res.status(200).json(deletedTransaction);
    } else {
        res.redirect("/404");
    }
});

transactionsController.put("/:id", (req, res) => {
    const { id } = req.params;
    if (transactionsArr[id]) {
        transactionsArr[id] = req.body;
        res.status(200).json(transactionsArr[id]);
    } else {
        res.redirect("/404")
    }
});

module.exports = transactionsController;