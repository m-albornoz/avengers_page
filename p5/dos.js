var years = [
  "1963",
  "1964",
  "1965",
  "1966",
  "1968",
  "1969",
  "1970",
  "1971",
  "1974",
  "1975",
  "2010",
  "2013",
  ]

var quantity = [5,1,3,1,3,1,2,1,11,15]

//movies.push("Matrix");
//oscars.push(4);

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight/1);
  canvas.parent('miContenedor');
  noLoop();
}

function windowResized() {
  //este ajuste es cuma: no estoy ajustando el ancho en relación al canvas, sino a la ventana
  //fíjense que también estoy utilizando el CSS para ajustar un ancho máximo de 100%
  resizeCanvas(windowWidth, windowHeight/2);
}

function draw() {
  background(20,200);
  noStroke ();
  for(var x = 0; x <= years.length; x++){
    //defino el blanco con 100/255 de transparencia
    fill(65,116,203,200);
    // el tamaño del texto es igual a la cantidad de oscars ganados * 3
    textSize((quantity[x]*3));
    // aquí dame el nro. de oscar ganado y ubícalo en una parte del ancho del canvas
    rect((height/3),  ((height/(years.length+5))*(x+0.5)), quantity[x]*30, 26);
    //re-defino el blanco
    fill(255);
    // ahora cambia el tamaño de texto a 12 px, como valor fijo para todo lo que sigue
    textSize(12);
    // dame el nombre de la película correspondiente y ubícala en una parte del ancho
    text(years[x],((height/7)+12) , ((height/(years.length+9))*(x+1)),((windowWidth/2)-50),100);
  }
}
