
let cursor_element, cursor_w, cursor_h, view_project_element;

function setup() 
{
  noCanvas();

  cursor_element = select ("#meu_cursor");
  cursor_element.hide();
  
  cursor_w = 100;
  cursor_h = 100;
  
  view_project_element = select ("#view_project");
  view_project_element.hide();
}


function draw() 
{
  cursor_element.size  (cursor_w, cursor_h);
  cursor_element.position (mouseX-cursor_w/2, mouseY-cursor_h/2, "fixed");
}

/*Controla o cursor quando este passa sobre links*/
/*Faz com que o cursor apareça quando passa sobre link*/
function showCustomCursor() 
{
  cursor_w = 100;
  cursor_h = 100;
  cursor_element.show();
}

/*Controla o cursor quando este passa sobre links*/
/*Faz com que o cursor desapareça quando passa sobre link*/
function hideCustomCursor () 
{
  cursor_element.hide();
}

/*Controla o cursor quando este passa a galeria de trabalhos no index*/
/*Faz com que o cursor aumente quando está sobre a imagem*/
function growCustomCursor()
{
  cursor_w = 220;
  cursor_h = 220;
  cursor_element.show();
  view_project_element.style("display", "flex");
}

/*Controla o cursor quando este passa a galeria de trabalhos no index*/
/*Faz com que o cursor desapareça quando está sobre a imagem*/
function shrinkCustomCursor() 
{
  cursor_w = 100;
  cursor_h = 100;
  view_project_element.hide();
  cursor_element.hide();
}
