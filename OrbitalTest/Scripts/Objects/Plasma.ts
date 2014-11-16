class Plasma extends Phaser.Sprite {
    // -----------------------
    // Constructor
    // -----------------------
    constructor(state: MainState, x: number, y: number) {
        super(state.game, x, y, 'plasma', 0);
        this.state = state;
        this.anchor.setTo(0.5, 0.5);
    }

    // -----------------------
    // Fields
    // -----------------------

    state: MainState;
    
    get circle(): Phaser.Circle {
        return new Phaser.Circle(this.x, this.y, 32);
    }

    // -----------------------
    // Methods
    // -----------------------

    burst() {
        for (var i = 0; i < 7; i++) {
            this.state.layers.objects.add(
                new PlasmaParticle(
                    this.game,
                    this.x,
                    this.y,
                    Math.random() * Math.PI * 2
                )
            );
        }
    }
} 