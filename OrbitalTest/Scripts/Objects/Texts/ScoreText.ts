class ScoreText extends Phaser.Text {
    // -----------------------
    // Constructor
    // -----------------------
    constructor(game: Phaser.Game, x: number, y: number, text: string, color: string) {
        super(game, x, y, text, { font: '24px Audiowide', fill: color, align: 'center', stroke: '#000000', strokeThickness: 2 });
    }

    update() {
        this.position.y--;
        this.alpha -= 0.02;

        if (this.alpha <= 0)
            this.destroy();
    }
} 