class FailText extends Phaser.Text {
    // -----------------------
    // Constructor
    // -----------------------

    constructor(game: Phaser.Game) {
        super(game, OrbitalGame.SCREEN_WIDTH / 2, OrbitalGame.SCREEN_HEIGHT / 2, 'FAIL!', {
            font: '96px Slackey',
            fill: '#FFFF00',
            align: 'center',
            stroke: '#FF0000',
            strokeThickness: 3
        });

        (<Phaser.Point>this.anchor).setTo(0.5, 0.5);
        this.timeout = 50;
    }

    // -----------------------
    // Fields
    // -----------------------

    timeout: number;

    update() {
        this.timeout --;
        this.position.y--;

        if(this.timeout	<= 10)
        this.alpha -= 0.1;

        if (this.timeout <= 0)
            this.destroy();
    }
} 