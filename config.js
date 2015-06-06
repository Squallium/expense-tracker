module.exports = {
    db: {
        production: MONGOLAB_URI,
        development: "mongodb://localhost/expense-tracker-dev",
        test: "mongodb://localhost/expense-tracker-test",
    }
};