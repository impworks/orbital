class MainState extends Phaser.State {

    // -----------------------
    // Constructor
    // -----------------------

    constructor() {
        super();
    }

    // -----------------------
    // Fields
    // -----------------------

    bg: SkyBackground;
    rocket: Rocket;
    planets: Planet[];
    plasma: Plasma;

    orbit: IOrbit;

    // -----------------------
    // Resource loading
    // -----------------------

    preload() {
        var assets = [
            'rocket',
            'planet-any',
            'planet-hover',
            'planet-selected',
            'plasma'
        ];

        assets.forEach(name => this.load.image(name, 'Content/Sprites/' + name + '.png'));
    }

    // -----------------------
    // Initialization
    // -----------------------

    create() {
        this.bg = new SkyBackground(this.game);
        this.rocket = new Rocket(this.game, OrbitalGame.SCREEN_WIDTH / 2, OrbitalGame.SCREEN_HEIGHT / 3 * 2);
        this.planets = this.createPlanets();
        this.orbit = this.initRocketOrbit();

        // todo: subscribe to events
    }

    createPlanets(): Planet[] {
        return [
            new Planet(this.game, 300, 300),
            new Planet(this.game, 700, 400)
        ];
    }

    initRocketOrbit(): IOrbit {
        var p = this.planets[0];
        var r = this.rocket;
        var radius = Math.sqrt(Math.pow(p.position.x - r.position.x, 2) + Math.pow(p.position.y - r.position.y, 2));
        var angle = Math.atan2(1, 2);
        var speed = 3;

        return {
            planet: p,
            radius: radius,
            speed: speed,
            angle: angle,
            angleIncrement: this.calculateAngleIncrement(radius, speed)
        };
    }

    calculateAngleIncrement(radius: number, speed: number) : number {
        var len = radius * 2 * Math.PI;
        return speed / len * Math.PI * 2;
    }

    // -----------------------
    // Game logic
    // -----------------------

    update() {
        this.moveRocket();
    }

    moveRocket() {
        this.orbit.angle += this.orbit.angleIncrement;

        var newPos = {
            x: this.orbit.planet.position.x + Math.cos(this.orbit.angle) * this.orbit.radius,
            y: this.orbit.planet.position.y + Math.sin(this.orbit.angle) * this.orbit.radius
        };

        var dist = {
            x: newPos.x - this.rocket.position.x,
            y: newPos.y - this.rocket.position.y,
        };

        this.rocket.rotation = -(Math.atan2(dist.x, dist.y) - (Math.PI / 2));
        this.rocket.position.x = newPos.x;
        this.rocket.position.y = newPos.y;
    }
}

interface IOrbit {
    planet: Planet;
    radius: number;
    speed: number;
    angle: number;
    angleIncrement: number;
}