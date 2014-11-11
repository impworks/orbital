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
    }

    // -----------------------
    // Fields
    // -----------------------

    isSelected: boolean;
    gravity: number;

    onClicked() {
        if (this.state.orbit.planet != this) {
            this.state.setRocketOrbit(this);
        }
    }
} 