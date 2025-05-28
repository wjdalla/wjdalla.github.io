let custom_cursor_element, body_element;


function setup() 
{
  noCanvas();
  
  custom_cursor_element = select ("#meu_cursor");
  custom_cursor_element.hide();

  body_element = select ("body");

}


function draw() 
{
  custom_cursor_element.position (mouseX -35, mouseY -30, "fixed");
}

function hideCustomCursor()
{
    if (window.getComputedStyle(custom_cursor_element.elt)['display'] != "none") 
    {
        body_element.style('cursor', 'default !important');
        custom_cursor_element.hide();
    }
}


function showCustomCursor() 
{
    if (window.getComputedStyle(custom_cursor_element.elt)['display'] === "none") 
    {
        body_element.style('cursor', 'none !important');
        custom_cursor_element.show();
    }
}
