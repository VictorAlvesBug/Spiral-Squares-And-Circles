var increment = 0;
var shapes;

function setup() {
    createCanvas(700, 700);

    //SHAPES WILL BE A BIDIMENSIONAL ARRAY
    shapes = [];

    for (let x = -width / 2; x <= width / 2; x+=20) {
        let i = (x + width / 2) / 20;
        shapes[i] = [];
        for (let y = -height / 2; y <= height / 2; y += 20) {
            let j = (y + height / 2) / 20;
            //INSTANCE THE SHAPE
            shapes[i][j] = new Shape(x, y, random());
        }
    }
}

function draw() {
    background(0);
    
    noFill();
    stroke(255);

    //(0,0) GOES TO THE CENTER OF THE SCREEN
    translate(width / 2, height / 2);

    for (let x = -width / 2; x <= width / 2; x += 20) {
        let i = (x + width / 2) / 20;
        for (let y = -height / 2; y <= height / 2; y += 20) {
            let j = (y + height / 2) / 20;

            //USE ONLY ALTERNATED SHAPES
            //LIKE THIS:
            //Y --> USE
            //N --> DON'T USE (IT'S LIKE IT DOESN'T EXIST)
            // N Y N Y N
            // Y N Y N Y
            // N Y N Y N
            // Y N Y N Y
            // N Y N Y N
            if (((x + y) / 20) % 2 == 0) {
                let distance = dist(x, y, 0, 0);
                let angle = atan2(y, x) + increment;
                
                if ((distance + map(angle % TWO_PI, 0, TWO_PI, 0, 200)) % 200 < 100) {
                    //SET A ELLIPSE
                    shapes[i][j].update(0);
                }
                else {
                    //SET A CROSS
                    shapes[i][j].update(1);
                }

                //DRAW THE CURRENT STATUS OF THE SHAPE
                shapes[i][j].show();
            }
        }
    }

    //INCREMENT TO CHANGE THE SHAPES
    increment -= 0.05;

    //BUT IT HAVE TO BE ALWAYS GREATER THAN PI
    if (increment <= PI) {
        increment += TWO_PI;
    }
}