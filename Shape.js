class Shape {
    constructor(x, y, status) {
        this.x = x;
        this.y = y;
        //STATUS GOES FROM 0 (ELLIPSE) TO 1 (CROSS);
        this.status = status;

        this.radius = 10;
    }

    update(newStatus) {
        //IF newStatus != this.status
        //this.status APPROACH OF THE newStatus
        if (newStatus > this.status) {
            this.status += 0.1;
        }
        else if (newStatus < this.status) {
            this.status -= 0.1;
        }

        //KEEP THE STATUS ON THE RANGE (0 - 1)
        if (this.status < 0) {
            this.status = 0;
        }
        else if (this.status > 1) {
            this.status = 1;
        }
    }

    show() {
        noFill();

        // SECTION IS 1/8 OF THE ELLIPSE
        let section = TWO_PI / 8;

        //SECTION POSITIONS
        // 5  6  7
        // 4     8
        // 3  2  1

        push();
        translate(this.x, this.y);

        //CHANGE COLOR BASED ON THE STATUS
        let r = map(this.status, 0, 1, 255, 0);
        let g = map(this.status, 0, 1, 0, 255);
        let b = map(this.status, 0, 1, 128, 128);

        stroke(r, g, b);

        if (this.status == 1) {
            ellipse(0, 0, 2 * this.radius, 2 * this.radius);
        }
        else {

            //DRAW THE SHAPE

            beginShape();

            vertex(this.radius * cos(section), this.radius * sin(section));
            vertex(this.status * this.radius * cos(2 * section), this.status * this.radius * sin(2 * section));
            vertex(this.radius * cos(3 * section), this.radius * sin(3 * section));
            vertex(this.status * this.radius * cos(4 * section), this.status * this.radius * sin(4 * section));
            vertex(this.radius * cos(5 * section), this.radius * sin(5 * section));
            vertex(this.status * this.radius * cos(6 * section), this.status * this.radius * sin(6 * section));
            vertex(this.radius * cos(7 * section), this.radius * sin(7 * section));
            vertex(this.status * this.radius * cos(8 * section), this.status * this.radius * sin(8 * section));

            endShape(CLOSE);
        }
        
        pop();
    }
}