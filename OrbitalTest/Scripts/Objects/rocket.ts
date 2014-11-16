class Rocket extends Phaser.Sprite {
    // -----------------------
    // Constructor
    // -----------------------

    constructor(state: MainState) {
        super(state.game, 0, 0, 'rocket', 0);
        this.state = state;
        this.anchor.setTo(0.5, 0.5);
        this.resetRocket();
    }

    // -----------------------
    // Fields
    // -----------------------

    state: MainState;
    speed: number;

    get rect(): Phaser.Rectangle {
        return new Phaser.Rectangle(this.x, this.y, this.width, this.height);
    }

    // -----------------------
    // Methods
    // -----------------------

    update() {
        var dir = this.rotation - Math.PI;
        var endX = this.x + Math.cos(dir) * 20;
        var endY = this.y + Math.sin(dir) * 20;
        for (var i = 0; i < 2; i++) {
            this.state.layers.objects.add(
                new RocketParticle(this.game, endX, endY, dir)
            );
        }
    }

    speedUp() {
        this.speed += 0.1;
    }

    resetRocket() {
        this.speed = 3;
        this.position.set(OrbitalGame.SCREEN_WIDTH / 2, OrbitalGame.SCREEN_HEIGHT / 3 * 2);
    }
} 