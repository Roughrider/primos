var profundidad = 0;
var texto ="";

/*Variables para cambiar el tamaño */
var x:int= 0;
var y:int = 0;
var size_x:int = 0;
var size_y:int = 0;

function OnGUI() {
	GUI.depth = profundidad;
	PosicionamientoDinamicoSegunPantalla();
	GUI.Label(Rect(x, y, size_x, size_y),texto);

}

function PosicionamientoDinamicoSegunPantalla() {

	//Metodo añadido para que si metemos numeros negativos 
	// se use el screenwidth restandole el numero negativo.
	//Asi podremos trabajar con posicionamiento dinamico segun la pantalla donde se ejecute el juego
	if (x < -1) {
		x = Screen.width + x;
	}
	
	if (y < -1) {
		y = Screen.height + y;
	}
	
	if (size_x < -1) {
		size_x = Screen.width +size_x;
	}
	
	if (size_y < -1) {
		size_y = Screen.height +size_y;
	}
	

}