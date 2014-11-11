class ScoreCounter extends Phaser.Text {
    // -----------------------
    // Constructor
    // -----------------------

    constructor(game: Phaser.Game) {
        super(game, 10, 10, 'Points: 0', { font: '14px Tahoma', fill: '#FFFFFF', align: 'left' });

        this.game.add.existing(this);
        this._score = 0;
    }

    // -----------------------
    // Constructor
    // -----------------------

    private _score: number;

    // -----------------------
    // Methods
    // -----------------------

    get score(): number {
        return this._score;
    }

    set score(value: number) {
        value = Math.round(value);
        this._score = value;
        this.text = 'Points: ' + value;
    }
} 