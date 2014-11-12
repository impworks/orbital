class Plasma extends Phaser.Sprite {
    constructor(game: Phaser.Game, x: number, y: number) {
        super(game, x, y, 'plasma', 0);
        this.anchor.setTo(0.5, 0.5);
    }
} 