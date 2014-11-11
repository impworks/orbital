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

    orbit: Orbit;

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
        this.setRocketOrbit(this.planets[0]);
    }

    createPlanets(): Planet[] {
        return [
            new Planet(this.game, 300, 300, this),
            new Planet(this.game, 700, 400, this),
            new Planet(this.game, 500, 100, this)
        ];
    }

    setRocketOrbit(p: Planet) {
        p.isSelected = true;

        if (this.orbit) {
            if(this.orbit.planet)
                this.orbit.planet.isSelected = false;

            this.orbit.destroy();
        }

        this.orbit = new Orbit(this.game, this.rocket, p);
    }

    // -----------------------
    // Game logic
    // -----------------------

    update() {
        this.moveRocket();
        this.updateOrbits();
    }

    moveRocket() {
        var center = this.orbit.planet.position;
        var state = this.orbit.state;
        var r = this.rocket;
        state.angle += state.angleIncrement;

        var newPos = {
            x: center.x + Math.cos(state.angle) * state.radius,
            y: center.y + Math.sin(state.angle) * state.radius
        };

        var dist = {
            x: newPos.x - r.position.x,
            y: newPos.y - r.position.y,
        };

        r.rotation = Math.atan2(dist.y, dist.x);
        r.position.set(newPos.x, newPos.y);
    }

    updateOrbits() {
        for (var i = 0; i < this.planets.length; i++) {
            var p = this.planets[i];
            if (p.orbit != this.orbit) {
                p.updateOrbit();
            }
        }
    }
}