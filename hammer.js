class hammer{
    constructor(x,y){
        var options={
            density:25,
            friction:2.0,
            restitution:0.5
        }
        this.body=Bodies.rectangle(x,y,20,50,options);
        this.width=20;
        this.height=50;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        push ();
        translate (pos.x,pos.y);
        stroke ("blue");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop ();
    }
}