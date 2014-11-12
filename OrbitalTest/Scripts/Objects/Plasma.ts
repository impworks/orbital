class Plasma extends Phaser.Sprite {
    // -----------------------
    // Constructor
    // -----------------------
    constructor(game: Phaser.Game, x: number, y: number) {
        super(game, x, y, 'plasma', 0);
        this.anchor.setTo(0.5, 0.5);
    }

    // -----------------------
    // Fields
    // -----------------------
    
    get circle(): Phaser.Circle {
        return new Phaser.Circle(this.x, this.y, 32);
    }
} 