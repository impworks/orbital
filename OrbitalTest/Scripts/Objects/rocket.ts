class Rocket extends Phaser.Sprite {
    // -----------------------
    // Constructor
    // -----------------------

    constructor(state: MainState, x: number, y: number) {
        super(state.game, x, y, 'rocket', 0);
        this.state = state;
        this.anchor.setTo(0.5, 0.5);
    }

    // -----------------------
    // Fields
    // -----------------------

    state: MainState;

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
} 