var App = require('ghost-app'),

    rockot;

rockot = App.extend({

    install: function () {},

    uninstall: function () {},

    activate: function () {},

    deactivate: function () {}

});


this.ghost.api.posts.read(1).then(function (post) {
    console.log(post.title);
});

module.exports = rockot;