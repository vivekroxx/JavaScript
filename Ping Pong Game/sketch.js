
let p_l;
let p_r;
function setup(){
    createCanvas(400,400);
    rectMode9(CENTER)
    p_l = new Peddle(10);
    p_r = new Peddle(200);
}
function draw(){
    background(220);
    p_l.show();
    p_r.show();
}