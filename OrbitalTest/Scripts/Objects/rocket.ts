class Rocket extends Phaser.Sprite {
    // -----------------------
    // Constructor
    // -----------------------

    constructor(game: Phaser.Game, x: number, y: number) {
        super(game, x, y, 'rocket', 0);
        this.anchor.setTo(0.5, 0.5);

        game.add.existing(this);
    }

    private destination: Phaser.Point;
    private momentum: Phaser.Point;
    private velocity: Phaser.Point;

    update() {
//        if (this.destination) {
//            this.momentum = new Phaser.Point(
//                this.destination.x - this.position.x,
//                this.destination.y - this.position.y
//            );
//
//            if (this.momentum.getMagnitude() < 30) {
//                this.momentum.setMagnitude(0);
//            } else {
//                this.momentum.normalize();
//            }
//        } else if(!this.momentum.isZero()) {
//            this.momentum = new Phaser.Point();
//        }
//
//        this.position.add(this.velocity.x, this.velocity.y);
//        this.velocity.add(this.momentum.x, this.momentum.y);
//
//        if(!this.momentum.isZero())
//            this.rotation = -(Math.atan2(this.velocity.x, this.velocity.y) - (Math.PI / 2));
//
//        if (this.velocity.getMagnitude() > 15)
//            this.velocity.setMagnitude(15);
//
//        if (this.momentum.isZero() && !this.velocity.isZero()) {
//            var threshold = 0.5;
//            var dec = 1;
//            var mag = this.velocity.getMagnitude();
//
//            if (Math.abs(mag) < threshold)
//                mag = 0;
//            else
//                mag -= mag > 0 ? dec : -dec;
//
//            this.velocity.setMagnitude(mag)
//        }
    }
} 