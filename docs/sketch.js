var font;
var vehicles = [];

function preload() {
    font = loadFont('Vegan Style Personal Use.ttf');
}

function setup() {
    createCanvas(1400, 700);
    background(180);    

    var points = font.textToPoints('Kunal Dewan', 75, 400, 192);
    for(var i=0; i<points.length; i++){
        var pt = points[i];
        var vehicle = new Vehicle(pt.x, pt.y);
        vehicles.push(vehicle);
    }
}

function draw() {
    background(51);
    for(var i=0; i< vehicles.length; i++){
        var v = vehicles[i];
        v.behaviors();
        v.update();
        v.show();
    }
}
