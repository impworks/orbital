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
        this.isHovered = false;

        this.circle = new Phaser.Circle(x, y, 71);
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
            this._isHovered = false;
            this.loadTexture(value ? 'planet-selected' : 'planet-any', 0);
            this.anchor.setTo(0.5, 0.5);
        }
    }

    private _isHovered: boolean;
    get isHovered(): boolean {
        return this._isHovered;
    }
    set isHovered(value: boolean) {
        if (value != this.isHovered && !this.isSelected) {
            this._isHovered = value;
            this.loadTexture(value ? 'planet-hover' : 'planet-any', 0);
            this.anchor.setTo(0.5, 0.5);
        }
    }

    circle: Phaser.Circle;

    // -----------------------
    // Fields
    // -----------------------

    onClicked() {
        if (this.state.orbit.planet != this) {
            this.state.setRocketOrbit(this);
        }
    }

    onMouseOver() {
        this.isHovered = true;
    }

    onMouseOut() {
        this.isHovered = false;
    }
} 