class Planet extends Phaser.Sprite {
    // -----------------------
    // Constructor
    // -----------------------

    constructor(
        game: Phaser.Game,
        x: number,
        y: number,
        private state: MainState
    ) {
        super(game, x, y, 'planet-any', 0);
        this.anchor.setTo(0.5, 0.5);

        game.add.existing(this);
        this.interactive = true;
        this.inputEnabled = true;

        this.events.onInputDown.add(() => this.onClicked());

        this.isSelected = false;
        this.updateOrbit();
    }

    // -----------------------
    // Fields
    // -----------------------

    isSelected: boolean;
    gravity: number;
    orbit: Orbit;

    onClicked() {
        if (this.state.orbit.planet != this) {
            this.state.setRocketOrbit(this);
        }
    }

    updateOrbit() {
        if(this.orbit)
            this.orbit.destroy();
        this.orbit = new Orbit(this.game, this.state.rocket, this);
    }
} 