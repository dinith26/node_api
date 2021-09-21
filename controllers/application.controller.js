const db = require("../models");
const Likns = db.links;
const Op = db.Sequelize.Op;

const Links = function(links) {
    this.url = links.url;
    this.code = links.code;
};


Links.create = (req, res) => {
    // Validate request
    if (!req.body.url) {
        res.status(400).send({
        message: "Url can not be empty!"
        });
        return;
    }

    const links = {
        url: req.body.url,
        code: req.body.code,
    };

    Likns.create(links)
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the url."
        });
    });
};

Links.findOne = (req, res) => {
    const code = req.params.id;
    var condition = code ? { code: code } : null;

    Likns.findAll({ where: condition })
        .then(data => {
            res.send(data[0]);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving links."
        });
    });
};

module.exports = Links;