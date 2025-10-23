function setup() {
    let canvas = createCanvas(windowWidth,windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1');

    for(let i=0;i<cookiecounter;i++){
        let temp = new Sweets(random(10,windowWidth-10),random(10,windowHeight-10),"cookie",random(2,4));
        floaties.push(temp);
    }
}

function draw() {
    background(220);

    for(let i=0;i<floaties.length;i++){
        floaties[i].show();
        floaties[i].move();
    }
}

class Sweets{
    constructor(x,y,type,spd){
        this.x = x;
        this.y = y;
        this.type = type;
        this.spd = spd;
    }

    show(){
        textAlign(CENTER, CENTER);
        textSize(40);

        text('🍪', this.x,this.y);
    }

    move(){
        this.x+=this.spd;
        this.y+=this.spd;

        if(this.x>=windowWidth||this.x<=0){
            this.spd*=-1;
            this.x+this.spd;
        } if (this.y>=windowHeight||this.y<=0){
            this.spd*=-1;
            this.y+this.spd;
        }
    }
}