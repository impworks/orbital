class SkyBackground extends Phaser.Sprite {

    constructor(game: Phaser.Game) {
        var bmp = game.add.bitmapData(640, 960);
        var grad = bmp.context.createLinearGradient(0, 0, 0, 960);
        grad.addColorStop(0, "#000000");
        grad.addColorStop(1, "#001234");
        bmp.context.fillStyle = grad;
        bmp.context.fillRect(0, 0, 640, 960);

        super(game, 0, 0, bmp);

        game.add.existing(this);
    }
}