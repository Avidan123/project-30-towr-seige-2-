class Block{
constructor(x,y,width,height){
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0,
        //isStatic:false
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visiblity=this.Visiblity-5
    World.add(world, this.body)

}
display(){
   
if(this.body.speed < 3){
    var pos =this.body.position;
    rectMode(CENTER);
rect(pos.x,pos.y,this.width,this.height)
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }


}






















}