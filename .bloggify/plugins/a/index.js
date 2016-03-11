module.exports = (conf, bloggify, ready) => {
    bloggify.server.page.add("/", lien => {
        lien.res.write("hi");
        setTimeout(function () {
            lien.res.write("hi");
            setTimeout(function () {
                lien.res.write("hi");
                setTimeout(function () {
                    lien.res.end("hi");

                }, 1000);

            }, 1000);
        }, 1000);
        //lien.end({
        //    hello: "world"
        //})
    });
    console.log("Loaded plugin a", conf);
    setTimeout(() => {
        ready();
    });
};
