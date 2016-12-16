module.exports = (conf, bloggify) => {
    bloggify.viewer.registerTemplate("user", `${__dirname}/test.ajs`);
    let users = [
        { name: "Alice" },
        { name: "Bob" }
    ];
    bloggify.server.addPage("/user/:id", lien => {
        bloggify.render(lien, "user", {
            title: "User"
        });
    });
    bloggify.viewer.beforeRender("/user/:id", "all", (data, cb)=> {
        let uid = data.lien.params.id;
        setTimeout(function() {
            data.user = users[uid];
            cb(null, data);
        }, 1000);
    });
};
