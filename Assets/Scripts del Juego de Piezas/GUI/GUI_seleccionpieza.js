var cursorImage : Texture;
private var cursorImagen: boolean;
var tipoBoton:int; //1 = play / 2= VigaHorizontal / 3=VigaVerical / 4=Borrar
var bola:GameObject;
var texturaOver:Texture;
var texturaOut:Texture;
var texturaIconoEraser:Texture;


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
		crearTipoObjeto = 1;

	}
	
	if (tipoBoton == 2) {
		crearTipoObjeto = 2;
	}
	
	if (tipoBoton == 3) {
		crearTipoObjeto = 3;
	}
	//Borrar un objeto
	if (tipoBoton == 4) {
		crearTipoObjeto = 4;
	}

}


function OnGUI() {
	var mousePos : Vector3 ;
	var pos : Rect ;
	if (cursorImagen) {
	
		 mousePos  = Input.mousePosition;
		GUI.depth = -2;
		 pos = Rect(mousePos.x,Screen.height - mousePos.y,cursorImage.width,cursorImage.height);
		GUI.Label(pos,cursorImage);
		
	}
	//Si tenemos seleccionado el boton de eliminar
	if (crearTipoObjeto==4) {
	
		Screen.showCursor = false;
		 mousePos  = Input.mousePosition;
		GUI.depth = -2;
		pos = Rect(mousePos.x-10,Screen.height - mousePos.y-36,texturaIconoEraser.width/1.3,texturaIconoEraser.height/1.3);
		GUI.Label(pos,texturaIconoEraser);
				
	}
}