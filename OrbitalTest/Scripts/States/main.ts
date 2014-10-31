class MainState extends Phaser.State {
    
    rocket: Rocket;

    preload() {
        this.load.image('rocket2', 'Content/Sprites/rocket2.png');
    }

    create() {
        this.rocket = new Rocket(this.game, 320, 800);
        var isThrusting = false;

        this.input.mouse.onMouseDown = (evt) => {
            this.rocket.thrustTo(evt.clientX, evt.clientY);
            isThrusting = true;
        };

        this.input.mouse.onMouseUp = (evt) => {
            this.rocket.stop();
            isThrusting = false;
        };

        this.input.mouse.onMouseMove = (evt) => {
            if (isThrusting) {
                this.rocket.thrustTo(evt.clientX, evt.clientY);
            } else {
                this.rocket.stop();
            }
        };
    }
} 