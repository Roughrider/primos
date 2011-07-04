var cursorImage : Texture;
private var cursorImagen: boolean;
var tipoBoton:int; //1 = play / 2= VigaHorizontal / 3=VigaVerical
var bola:GameObject;
var texturaOver:Texture;
var texturaOut:Texture;


var crearTipoObjeto:int; //0= NINGUNA, 2= VigaHorizontal, 
var encimaBarra:boolean = false;

 
function OnMouseOver () {

	Screen.showCursor = false;
	cursorImagen=true;
	encimaBarra = true;
	guiTexture.texture = texturaOver;

}
 
function OnMouseExit(){
	Screen.showCursor = true;
	cursorImagen=false;
	encimaBarra=false;
	guiTexture.texture = texturaOut;



}
 
function OnMouseDown(){
	//Clear
	if (tipoBoton == -1) {
		crearTipoObjeto = -1;
	}
	//Play
	if (tipoBoton==1) {
		bola.constantForce.enabled = true;

	}
	
	if (tipoBoton == 2) {
		crearTipoObjeto = 2;
	}
	
	if (tipoBoton == 3) {
		crearTipoObjeto = 3;
	}

}


function OnGUI() {

	if (cursorImagen) {
	
		var mousePos : Vector3 = Input.mousePosition;
		GUI.depth = -2;
		var pos : Rect = Rect(mousePos.x,Screen.height - mousePos.y,cursorImage.width,cursorImage.height);
		GUI.Label(pos,cursorImage);
		
	}
}