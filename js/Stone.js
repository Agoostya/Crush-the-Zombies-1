class Stone{
    constructor(x,y,r){
        let options={
            restitution:0.08
        }

        this.r=r;
        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);
    }

    show(){
        let pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        noStroke();
        pop();
    }
}