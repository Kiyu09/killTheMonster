class Hero {
  constructor(x,y,width, height)
	{
		var options = { 
			isStatic:false,
            restitution:0,
			density: 1.2, 
			friction: 1
		};

	
		this.body=Bodies.rectangle(x, y, width, height, options);
		this.width = width;
		this.height = height;
		this.image=loadImage("superhero.png");
		World.add(world, this.body);

	}
	
	display()
	{
			
		    var angle = this.body.angle;
			var pos=this.body.position;

			push()
			translate(this.body.position.x, this.body.position.y);
			imageMode(CENTER);
			image(this.image, 0,0,this.width, this.height)
			pop();


			
	}
}
