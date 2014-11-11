class Orbit extends Phaser.Graphics {
    // -----------------------
    // Constructor
    // -----------------------

    constructor(
        game: Phaser.Game,
        public rocket: Rocket,
        public planet: Planet
    ) {
        super(game, 0, 0);

        this.calculateProperties();
        this.createGraphics();

        this.game.add.existing(this);
    }

    // -----------------------
    // Fields
    // -----------------------

    state: {
        radius: number;
        speed: number;
        angle: number;
        angleIncrement: number;
    };

    // -----------------------
    // Helpers
    // -----------------------

    calculateProperties() {
        var dist = this.distanceBetween(this.rocket, this.planet);
        var radius = Math.sqrt(Math.pow(dist.x, 2) + Math.pow(dist.y, 2));
        var angle = Math.atan2(dist.y, dist.x);
        var speed = 3;
        var angleIncrement = this.angleIncrementFor(radius, speed);

        this.state = {
            radius: radius,
            angle: angle,
            speed: speed,
            angleIncrement: angleIncrement
        };
    }

    createGraphics() {
        if (this.planet.isSelected)
            this.lineStyle(4, 0xFFFFFF, 0.6);
        else
            this.lineStyle(2, 0xFFFFFF, 0.1 + Math.min(0.4 * OrbitalGame.SCREEN_WIDTH/(2 * this.state.radius), 0.4));

        this.drawCircle(this.planet.position.x, this.planet.position.y, this.state.radius * 2);
    }

    distanceBetween(a: Phaser.Sprite, b: Phaser.Sprite): { x: number; y: number } {
        return {
            x: a.position.x - b.position.x,
            y: a.position.y - b.position.y,
        };
    }

    angleIncrementFor(radius: number, speed: number): number {
        var len = radius * 2 * Math.PI;
        return speed / len * Math.PI * 2;
    }
} 