class Rocket extends Phaser.Sprite {
    // -----------------------
    // Constructor
    // -----------------------

    constructor(game: Phaser.Game, x: number, y: number) {
        super(game, x, y, 'rocket', 0);
        this.anchor.setTo(0.5, 0.5);
    }
} 