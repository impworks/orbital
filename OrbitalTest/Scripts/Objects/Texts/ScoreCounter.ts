class ScoreCounter extends Phaser.Text {
    // -----------------------
    // Constructor
    // -----------------------

    constructor(game: Phaser.Game) {
        super(game, 10, 10, '', { font: '14px Tahoma', fill: '#FFFFFF', align: 'left' });
        this.score = 0;
    }

    // -----------------------
    // Constructor
    // -----------------------

    private _score: number;
    private _maxScore: number;

    // -----------------------
    // Methods
    // -----------------------

    get score(): number {
        return this._score;
    }

    set score(value: number) {
        value = Math.round(value);
        this._score = value;

        if (value > this._maxScore || !this._maxScore)
            this._maxScore = value;

        this.text = 'Points: ' + value + '\nBest: ' + this._maxScore;
    }
} 