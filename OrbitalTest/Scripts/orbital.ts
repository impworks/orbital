class OrbitalGame extends Phaser.Game {
    // -----------------------
    // Constructor
    // -----------------------
    constructor() {
        super(640, 960, Phaser.AUTO);

        this.state.add('Main', MainState, false);
        this.state.start('Main');
    }
}

window.onload = () => {
    var game = new OrbitalGame();
}