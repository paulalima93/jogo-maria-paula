var policial


var edges;

var parede1, parede2, parede3, parede4, parede5, parede6,
parede7, parede8, parede9,parede10, parede11, parede12;

var memoria1
var memoria2
var memoria3
var memoria4
var memoria5

var escada;
var escada2;

var imagemesteira;
var imagempiso;
var imagemmemoria;

var grupoParedes;
var grupoParedes2;
var grupoMemoria;
var andar = 1

var noandar1 = true
var noandar2 = false

function preload(){
  imagemesteira = loadImage("assets/esteira.jpg")
  imagempiso= loadImage("assets/piso.jpg");
  imagemmemoria = loadImage("assets/memoria.png");
}

function setup(){
createCanvas(2000,1000)
policial = createSprite(width/2,height-50,50,50);
//policial = createSprite(1400,45,50,50);
policial.shapeColor = "blue";

camera.zoom = 0.5;

edges=createEdgeSprites();
 





}


function draw(){
  //definir a cor do plano de fundo 
  background("#ccc");
  
  

  controlarPolicial()
  criarpapeis();
  coletarmemoria();
  
  if(policial.y < 50 && policial.x > 1300 && policial.x < 1500 && noandar2 === false ){
    noandar1 = false
    noandar2 = true
    andar = 2;
  }

      if (andar === 1 && noandar1 === true) {
      criarAndarUm();
      noandar1 = false
     // console.log("no andar 1")
    }

    if (andar === 2 && noandar2 === true) {
      criarAndarDois();
      noandar2 = false
     // console.log("no andar 2")
    }

  drawSprites();
   
  if(andar === 1) {
    image(imagemesteira, 10, 400, 300,100)
    image(imagemesteira, 10, 500, 300,100)
    image(imagemesteira, 1700, 400, 300,100)
    image(imagemesteira, 1700, 500, 300,100)
    policial.collide(grupoParedes);
  }
  

 if (andar === 2) {
    policial.collide(grupoParedes2);  
    //grupoParedes.destroyEach();
    //escada.destroy();
 }

  policial.collide(edges);

  camera.position.x = policial.x;
  camera.position.y = policial.y;

  
}

function criarAndarDois(){
  //escada2 = createSprite(1200, 500, 500, 500)
 
  parede1 = createSprite(300,80,10,180);
  parede2 = createSprite(300,520,10,400);
  parede3 = createSprite(500,600,10,850);
  parede4 = createSprite(300,950,10,150);

  parede5 = createSprite(1700,80,10,180);
  parede6 = createSprite(1700,520,10,400);
  parede7 = createSprite(1500,600,10,850);
  parede8 = createSprite(1700,950,10,150);

  parede9 = createSprite(1000,180,1000,10);

  parede10 = createSprite(150,520,300,10);
  parede11 = createSprite(1850,520,300,10);

  grupoParedes2 = new Group();

  grupoParedes2.add(parede1);
  grupoParedes2.add(parede2);
  grupoParedes2.add(parede3);
  grupoParedes2.add(parede4);
  grupoParedes2.add(parede5);
  grupoParedes2.add(parede6);
  grupoParedes2.add(parede7);
  grupoParedes2.add(parede8);
  grupoParedes2.add(parede9);
 }

function criarAndarUm (){

escada = createSprite(1400, 100, 100, 200)

parede1 = createSprite(300,80,10,180);
parede2 = createSprite(300,350,10,130);
parede3 = createSprite(300,670,10,150);
parede4 = createSprite(300,950,10,150);

parede5 = createSprite(1700,80,10,180);
parede6 = createSprite(1700,350,10,130);
parede7 = createSprite(1700,670,10,150);
parede8 = createSprite(1700,950,10,150);

grupoParedes = new Group();

grupoParedes.add(parede1);
grupoParedes.add(parede2);
grupoParedes.add(parede3);
grupoParedes.add(parede4);
grupoParedes.add(parede5);
grupoParedes.add(parede6);
grupoParedes.add(parede7);
grupoParedes.add(parede8);


}

function criarpapeis(){ 

grupoMemoria = new Group();

if (andar === 1){
  memoria1 = createSprite(50, 50);
  memoria1.addImage("memoria", imagemmemoria);
  memoria1.scale = 0.2

  memoria2 = createSprite(1950, 950);
  memoria2.addImage("memoria", imagemmemoria);
  memoria2.scale = 0.2

  
  grupoMemoria.add(memoria1);
  grupoMemoria.add(memoria2);
}

if (andar === 2){
 memoria3 = createSprite(50, 50);
 memoria3.addImage("memoria", imagemmemoria);
 memoria3.scale =0.2

 memoria4 = createSprite(45, 950);
 memoria4.addImage("memoria", imagemmemoria);
 memoria4.scale = 0.2

  memoria5 = createSprite(1950, 50);
  memoria5.addImage("memoria", imagemmemoria);
  memoria5.scale = 0.2;

  grupoMemoria.add(memoria3);
  grupoMemoria.add(memoria4);
  grupoMemoria.add(memoria5);

 memoria1.destroy();
 memoria2.destroy();
}


}


function controlarPolicial(){
  if (keyIsDown(65)) {
    policial.x -= 10
  }

  if (keyIsDown(83)) {
    policial.y += 10
  }

  if (keyIsDown(68)) {
    policial.x += 10
  }

  if (keyIsDown(87)) {
    policial.y -= 10
  }

  if(keyIsDown(65) && keyIsDown(16)){
    policial.x -= 9
  }

  if(keyIsDown(68) && keyIsDown(16)){
    policial.x += 9
  }

  if(keyIsDown(83) && keyIsDown(16)){
    policial.y += 9
  }
  
  if(keyIsDown(87) && keyIsDown(16)){
    policial.y -= 9
  }
}

function coletarmemoria(){
  if(policial.collide(memoria1)){
    memoria1.visible = false;
    console.log("pegou a memoria 1");
  }
}