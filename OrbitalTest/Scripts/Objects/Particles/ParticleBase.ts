class ParticleBase extends Phaser.Sprite {
    constructor(game: Phaser.Game, x: number, y: number, spriteKey: string, speed: number, direction: number) {
        super(game, x, y, spriteKey, 0);

        this.alpha = 0.9 + Math.random() * 0.1;
        this.particleInfo = {
            rotation: -0.2 + Math.random() * 0.4,
            xSpeed: Math.cos(direction) * speed,
            ySpeed: Math.sin(direction) * speed
        };

        this.blendMode = PIXI.blendModes.ADD;
    }

    // -----------------------
    // Fields
    // -----------------------
    particleInfo: {
        xSpeed: number;
        ySpeed: number;
        rotation: number;
    };

    // -----------------------
    // Methods
    // -----------------------
    update() {
        this.alpha -= 0.01;
        this.rotation += this.particleInfo.rotation;
        this.position.x += this.particleInfo.xSpeed;
        this.position.y += this.particleInfo.ySpeed;

        if (this.alpha <= 0)
            this.destroy();
    }
} 