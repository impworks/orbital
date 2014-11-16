class ParticleBase extends Phaser.Sprite {
    constructor(game: Phaser.Game, x: number, y: number, spriteKey: string, speed: number, direction: number, alphaSpeed: number) {
        super(game, x, y, spriteKey, 0);
        this.anchor.setTo(0.5, 0.5);

        direction = direction - 0.1 + Math.random() * 0.2;
        this.alpha = 0.8 + Math.random() * 0.2;
        this.particleInfo = {
            rotation: -0.2 + Math.random() * 0.4,
            alphaSpeed: alphaSpeed,
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
        alphaSpeed: number;
        rotation: number;
    };

    // -----------------------
    // Methods
    // -----------------------
    update() {
        this.alpha -= this.particleInfo.alphaSpeed;
        this.rotation += this.particleInfo.rotation;
        this.position.x += this.particleInfo.xSpeed;
        this.position.y += this.particleInfo.ySpeed;

        if (this.alpha <= 0)
            this.destroy();
    }
} 