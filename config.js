module.exports = {
    db: {
        production: process.env.MONGOLAB_URI,
        development: "mongodb://localhost/expense-tracker-dev",
        test: "mongodb://localhost/expense-tracker-test",
    }
};