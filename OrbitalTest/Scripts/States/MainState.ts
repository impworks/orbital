﻿class MainState extends Phaser.State {

    // -----------------------
    // Constructor
    // -----------------------

    constructor() {
        super();

        var margin = 0.2;
        var w = OrbitalGame.SCREEN_WIDTH;
        var h = OrbitalGame.SCREEN_HEIGHT;
        this.bounds = {
            screen: new Phaser.Rectangle(0, 0, w, h),
            playZone: new Phaser.Rectangle(w * margin, h * margin, w - w*margin*2, h-h*margin*2)
        };
    }

    // -----------------------
    // Fields
    // -----------------------

    bounds: {
        screen: Phaser.Rectangle;
        playZone: Phaser.Rectangle;
    };

    layers: {
        bg: Phaser.Group;
        planets: Phaser.Group;
        orbits: Phaser.Group;
        objects: Phaser.Group;
        ui: Phaser.Group;
    };

    bg: SkyBackground;
    rocket: Rocket;
    planets: Planet[];
    plasma: Plasma;
    scoreCounter: ScoreCounter;

    orbit: Orbit;
    orbitHint: OrbitHint;

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
        this.plasma = new Plasma(this.game, 450, 320);
        this.scoreCounter = new ScoreCounter(this.game);
        this.orbitHint = new OrbitHint(this.game);

        this.layers = {
            bg: this.game.add.group(),
            planets: this.game.add.group(),
            orbits: this.game.add.group(),
            objects: this.game.add.group(),
            ui: this.game.add.group()
        };

        this.layers.bg.add(this.bg);
        this.layers.planets.addMultiple(this.planets);
        this.layers.orbits.add(this.orbitHint);
        this.layers.objects.add(this.rocket);
        this.layers.objects.add(this.plasma);
        this.layers.ui.add(this.scoreCounter);

        this.setRocketOrbit(this.planets[0]);
    }

    createPlanets(): Planet[] {
        return [
            new Planet(this.game, 480, 150, this),
            new Planet(this.game, 200, 500, this),
            new Planet(this.game, 800, 450, this)
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
        this.layers.orbits.add(this.orbit);
    }

    // -----------------------
    // Game logic
    // -----------------------

    update() {
        this.moveRocket();
        this.updateOrbitHint();
        this.checkCollisions();
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

    updateOrbitHint() {
        var hovered = null;
        for (var i = 0; i < this.planets.length; i++) {
            var curr = this.planets[i];
            if (curr.isHovered) {
                hovered = curr;
                break;
            }
        }

        this.orbitHint.updateHint(this.rocket, hovered);
    }

    checkCollisions() {
        // rocket and plasma
        if (this.rocket.overlap(this.plasma)) {
            this.scoreCounter.score++;
            this.movePlasma();
        }

        this.planets.forEach(p => {
            if (p.overlap(this.rocket)) {
                this.restartGame();
            }
        });

//        if (!this.bounds.playZone.contains(this.rocket.position.x, this.rocket.position.y))
//            this.restartGame();
    }

    movePlasma() {
        var x: number;
        var y: number;

        while (true) {
            x = this.bounds.playZone.randomX;
            y = this.bounds.playZone.randomY;

            var tooClose = false;
            for (var i = 0; i < this.planets.length; i++) {
                var p = this.planets[i].position;
                var dsq = Math.pow(p.x - x, 2) + Math.pow(p.y - y, 2);
                if (dsq < 3600) {
                    tooClose = true;
                    break;
                }
            }

            if(!tooClose) break;
        }

        this.plasma.position.set(x, y);
    }

    restartGame() {
        this.rocket.position.set(OrbitalGame.SCREEN_WIDTH / 2, OrbitalGame.SCREEN_HEIGHT / 3 * 2);
        this.setRocketOrbit(this.planets[0]);
        this.scoreCounter.score = 0;
    }
}