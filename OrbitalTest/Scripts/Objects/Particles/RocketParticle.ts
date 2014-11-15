class RocketParticle extends ParticleBase {
    constructor(game: Phaser.Game, x: number, y: number, speed: number, direction: number) {
        super(game, x, y, 'rocket-particle', speed, direction);
    }
}  