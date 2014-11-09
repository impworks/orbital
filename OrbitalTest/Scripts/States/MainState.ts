class MainState extends Phaser.State {

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

    create() {
        this.bg = new SkyBackground(this.game);
        this.rocket = new Rocket(this.game, OrbitalGame.SCREEN_WIDTH / 2, OrbitalGame.SCREEN_HEIGHT / 3 * 2);

        // todo: create stuff
    }
} 