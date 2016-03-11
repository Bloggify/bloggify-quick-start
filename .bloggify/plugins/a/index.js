module.exports = (conf, bloggify, ready) => {
    console.log("Loaded plugin a", conf);
    setTimeout(() => {
        ready();
    });
};
