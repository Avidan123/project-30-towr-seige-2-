const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body
const Constraint=Matter.Constraint

var engine,world
var ground
var polygon
var block1,ground2
var block2
var block3
 var block4
 var block5
var block6
var block7
 var block8
 var block9
 var block10
 var block11,block12,lock13,block14,block15,block16,block17,block18,block19,block20,block21,block22
 var sling
function setup(){
    createCanvas(1000,600)
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(400,265,190,10)
    polygon=new Polygon(150,200,50)

    block1=new Block(330,235,30,40)
    block2=new Block(360,235,30,40)
    block3=new Block(390,235,30,40)
    block4=new Block(420,235,30,40)
    block5=new Block(450,235,30,40)

    block6=new Block(360,195,30,40)
    block7=new Block(390,195,30,40)
    block8=new Block(420,195,30,40)

    block9=new Block(375,155,30,40)
    block10=new Block(405,155,30,40)

    block22=new Block(390,115,30,40)

    ground2=new Ground(650,385,190,10)


    block11=new Block(580,355,30,40)
    block12=new Block(610,355,30,40)
    block13=new Block(640,355,30,40)
    block14=new Block(670,355,30,40)
    block15=new Block(700,355,30,40)

    block16=new Block(610,315,30,40)
block17=new Block(640,315,30,40)
   block18=new Block(670,315,30,40)

   block19=new Block(625,275,30,40)
    block20=new Block(655,275,30,40)
    block21=new Block(640,235,30,40)








sling=new SlingShot(polygon.body,{x:100,y:150})
}

function draw(){
background("black")

Engine.update(engine)

ground.display()
polygon.display()
sling.display()


ground2.display()

block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
block7.display()
block8.display()
block9.display()
block10.display()
block11.display()

block12.display()
block13.display()
block14.display()
block15.display()
block16.display()
block17.display()
block18.display()
block19.display()
block20.display()
block21.display()
block22.display()



drawSprites()

}
function keyPressed(){
    if (keyCode===32){

        sling.attach(polygon.body)
    }
}

function mouseDragged(){

    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})


}

function mouseReleased(){

    sling.fly()

}
