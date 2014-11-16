class OrbitalGame extends Phaser.Game {
    // -----------------------
    // Constants
    // -----------------------

    static SCREEN_WIDTH: number = 960;
    static SCREEN_HEIGHT: number = 640;

    // -----------------------
    // Constructor
    // -----------------------
    constructor() {
        super(OrbitalGame.SCREEN_WIDTH, OrbitalGame.SCREEN_HEIGHT, Phaser.AUTO);

        this.state.add('Main', MainState, false);
        this.state.start('Main');
    }
}

window.onload = () => {
    new OrbitalGame();
}