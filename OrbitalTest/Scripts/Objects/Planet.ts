class Planet extends Phaser.Sprite {
    // -----------------------
    // Constructor
    // -----------------------

    constructor(game: Phaser.Game, x: number, y: number) {
        super(game, x, y, 'planet-any', 0);
        this.anchor.setTo(0.5, 0.5);

        game.add.existing(this);

        this.isSelected = false;
    }

    // -----------------------
    // Fields
    // -----------------------

    isSelected: boolean;
    size: number;
    position: Phaser.Point;
    rotation: number;
    gravity: number;
} 