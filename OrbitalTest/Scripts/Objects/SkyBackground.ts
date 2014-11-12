class SkyBackground extends Phaser.Sprite {

    constructor(game: Phaser.Game) {
        var bmp = game.add.bitmapData(OrbitalGame.SCREEN_WIDTH, OrbitalGame.SCREEN_HEIGHT);
        var grad = bmp.context.createLinearGradient(0, 0, 0, OrbitalGame.SCREEN_HEIGHT);
        grad.addColorStop(0, "#000000");
        grad.addColorStop(1, "#001234");
        bmp.context.fillStyle = grad;
        bmp.context.fillRect(0, 0, OrbitalGame.SCREEN_WIDTH, OrbitalGame.SCREEN_HEIGHT);

        super(game, 0, 0, bmp);
    }
}