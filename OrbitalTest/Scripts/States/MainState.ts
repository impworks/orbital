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
        var distance = Math.sqrt(Math.pow(p.position.x - r.position.x, 2) + Math.pow(p.position.y - r.position.y, 2));
        return {
            planet: p,
            radius: distance
        };
    }

    // -----------------------
    // Game logic
    // -----------------------

    // todo
}

interface IOrbit {
    planet: Planet;
    radius: number;
}