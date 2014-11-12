class CollisionHelper {
    /* 
     * Determines whether two circles collide or not.
     * Input: 
     * - rect: an Arcade physics body with centered anchor
     * - circle: a square Arcade physics bodies with centered anchor
     * Output:
     * - true, if collision is detected
     * - false, if no collision is detected
     */
    static collidesRectCircle(rect: Phaser.Rectangle, rotation: number, circle: Phaser.Circle) {
        var upperRectRadius = Math.max(rect.width, rect.height) * 0.75;

        // quick check, whether collision is actually possible:
        if (Math.abs(circle.x - rect.x) < circle.radius + upperRectRadius &&
            Math.abs(circle.y - rect.y) < circle.radius + upperRectRadius) {

            // adjust radians:
            var rot = rotation > 0 ? -1 * rotation : -1 * rotation + Math.PI;

            // rotate circle around origin of the rectangle:
            var rotatedCircleX = Math.cos(rot) * (circle.x - rect.x) -
                Math.sin(rot) * (circle.y - rect.y) + rect.x;
            var rotatedCircleY = Math.sin(rot) * (circle.x - rect.x) +
                Math.cos(rot) * (circle.y - rect.y) + rect.y;

            // get upper left position of the rectangle:
            var rectX = rect.x - (rect.width * 0.5);
            var rectY = rect.y - (rect.height * 0.5);

            // find closest point in the rectangle to the rotated circle's center:
            var closestX, closestY;

            if (rotatedCircleX < rectX) {
                closestX = rectX;
            } else if (rotatedCircleX > rectX + rect.width) {
                closestX = rectX + rect.width;
            } else {
                closestX = rotatedCircleX;
            }

            if (rotatedCircleY < rectY) {
                closestY = rectY;
            } else if (rotatedCircleY > rectY + rect.height) {
                closestY = rectY + rect.height;
            } else {
                closestY = rotatedCircleY;
            }

            // check distance between closest point and rotated circle's center:
            var distance = CollisionHelper.getPowDistance(rotatedCircleX, rotatedCircleY, closestX, closestY);
            if (distance < circle.radius * circle.radius) {
                return true; // Collision
            }
        }
        return false;
    }

    /* 
     * Helper function to determine the distance between
     * two points using Pythagorean theorem 
     */
    static getPowDistance(fromX: number, fromY: number, toX: number, toY: number) {
        var a = Math.abs(fromX - toX);
        var b = Math.abs(fromY - toY);
        return (a * a) + (b * b);
    }
} 