class OrbitHint extends Phaser.Graphics {

    // -----------------------
    // Constructor
    // -----------------------
    constructor(game: Phaser.Game) {
        super(game, 0, 0);
    }

    // -----------------------
    // Methods
    // -----------------------
    updateHint(rocket: Rocket, planet: Planet) {
        this.redraw(rocket, planet);
    }

    redraw(rocket: Rocket, planet: Planet) {
        this.clear();

        if (!planet)
            return;

        var r = rocket.position;
        var p = planet.position;

        var angle = Math.atan2(r.y - p.y, r.x - p.x);
        var radius = Math.sqrt(Math.pow(p.x - r.x, 2) + Math.pow(p.y - r.y, 2));
       
        this.moveTo(p.x + Math.cos(angle) * radius, p.y + Math.sin(angle) * radius);

        // modifying this number may lead to bugs!
        var parts = 7;
        var partSize = Math.PI / (2 * parts);

        for (var i = 0; i < parts; i++) {
            this.lineStyle(3, 0x00FFFF, 1.0 * (parts - i) / parts);
            this.arc(p.x, p.y, radius, angle + partSize * i, angle + partSize * (i+1), false);
        }
    }
} 