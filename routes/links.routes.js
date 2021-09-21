module.exports = app => {
    const links = require("../controllers/application.controller.js")

    var router = require("express").Router();

    router.post("/", links.create);


    router.get("/:id", links.findOne);

    app.use('/api/links', router);
  };