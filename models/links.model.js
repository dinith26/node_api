module.exports = (sequelize, Sequelize) => {
    const Links = sequelize.define("links", {
      url: {
        type: Sequelize.TEXT
      },
      code: {
        type: Sequelize.STRING
      }
    });

    return Links;
  };