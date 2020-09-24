class Dustbin{
constructor(){
    var options={
    isStatic: true,
    restitution:0.3,
    friction:0.5,
    density:1.2,
    }
this.body1=Bodies.rectangle(400,350,5,100,options);
this.body2=Bodies.rectangle(350,350,5,100,options);
this.body3=Bodies.rectangle(375,380,50,5,options);
World.add(world,this.body1)
World.add(world,this.body2)
World.add(world,this.body3)
}
display(){

    rect(this.body1.position.x,this.body1.position.y,5,100)
    rect(this.body2.position.x,this.body2.position.y,5,100)
    rect(this.body3.position.x,this.body3.position.y,50,5)
}

}
