class PlasmaParticle extends ParticleBase {
    // -----------------------
    // Constructor
    // -----------------------

    constructor(game: Phaser.Game, x: number, y: number, direction: number) {
        super(game, x, y, 'plasma-particle', 1 + Math.random() * 1, direction, 0.02);
    }
} 