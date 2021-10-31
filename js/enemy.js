class enemy{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("images/mango.png")
		this.Visiblity = 255;
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display(){

		if(this.body.speed > 1){
			 World.remove(world, this.body);
			 push();
			 this.Visiblity = this.Visiblity - 5;
			 tint(255,this.Visiblity);
			 image(this.image, this.body.position.x, this.body.position.y, 50, 50);
			 pop();
		   }

		var enemyPos=this.body.position;	
		push()
		translate(enemyPos.x, enemyPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }
}