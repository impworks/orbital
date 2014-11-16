class RocketParticle extends ParticleBase {
    constructor(game: Phaser.Game, x: number, y: number, direction: number) {
        super(game, x, y, 'rocket-particle', 3 + Math.random()*2, direction, 0.05);
    }
}  