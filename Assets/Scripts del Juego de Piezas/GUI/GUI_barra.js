var encimaBarra:boolean = false;
var profundidad = 0;
var tex:Texture;
var texturaOnMouse:GUITexture;
/*Variables para cambiar el tamaño */

function OnMouseOver () {
	Debug.Log("ENTRA A BARRA");
	encimaBarra = true;
}

function OnMouseExit () {
	Debug.Log("SALE A BARRA");
	encimaBarra = false;
}


function OnGUI() {
	//GUI.depth = profundidad;
	//GUI.DrawTexture(Rect(0, Screen.height - 58, Screen.width, 58), tex);
	texturaOnMouse.pixelInset = (Rect(0, 0, Screen.width, 58));
	
}