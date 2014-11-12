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

        this.interactive = true;
        this.inputEnabled = true;

        this.events.onInputDown.add(() => this.onClicked());
        this.events.onInputOver.add(() => this.onMouseOver());
        this.events.onInputOut.add(() => this.onMouseOut());

        this.isSelected = false;
    }

    // -----------------------
    // Fields
    // -----------------------

    private _isSelected: boolean;
    get isSelected(): boolean {
        return this._isSelected;
    }
    set isSelected(value: boolean) {
        if (value != this.isSelected) {
            this._isSelected = value;
            this.loadTexture(value ? 'planet-selected' : 'planet-any', 0);
            this.anchor.setTo(0.5, 0.5);
        }
    }

    onClicked() {
        if (this.state.orbit.planet != this) {
            this.state.setRocketOrbit(this);
        }
    }

    onMouseOver() {
        if (!this.isSelected) {
            this.loadTexture('planet-hover', 0);
            this.anchor.setTo(0.5, 0.5);
        }
    }

    onMouseOut() {
        if (!this.isSelected) {
            this.loadTexture('planet-any', 0);
            this.anchor.setTo(0.5, 0.5);
        }
    }
} 