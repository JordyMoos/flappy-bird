function gameOver(game) {

    var bird,
        ground,
        pipeGroup;


    var Scoreboard = function(game) {
        Phaser.Group.call(this, game)
    };

    Scoreboard.prototype = Object.create(Phaser.Group.prototype);
    Scoreboard.prototype.constructor = Scoreboard;

    return {

        // before hook
        preload: preload,

        // after preload display game sprites
        create: create,

        // 60 fps
        update: update,

        // AKA free
        shutdown: shutdown

    };

    function preload() {
    }

    function create() {

        game.add.sprite(0, 0, 'background');
        var gameOverText = game.add.bitmapText(
            game.width / 2 - 50 , game.height / 2 - 80,
            'flappyFont', 'Game over !', 24
        );
        console.log('gameOver is not that awesome');
    }

    function update() {
    }


    function shutdown() {
    }

}

