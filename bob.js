class Bob{

constructor(x,y,radius){

    
		var options={
			isStatic:false,
			restitution:1.2,
			friction:0.1,
			density:1.3
			}
		this.x=x;
		this.y=y;
		this.radius=radius
		this.body=Bodies.circle(x,y,radius/2, options);
		World.add(world, this.body);

}
display(){

  var pos=this.body.position;
	push()
   
	translate(pos.x, pos.y);
	ellipseMode(CENTER);
	strokeWeight(4);
	stroke("gold")
	fill("grey")
    ellipse(0,0,this.radius,this.radius)
    pop()
}

}