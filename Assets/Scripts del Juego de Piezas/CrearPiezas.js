var GUI_Barra:GUI_barra;
var GUI_seleccionpieza1:GUI_seleccionpieza; //Script del primer boton - Viga Horizontal
var GUI_seleccionpieza2:GUI_seleccionpieza;//Script del segundo boton - Viga Vertical
var vigaHorizontal : GameObject;
var vigaVertical : GameObject;
var camaraPrincipal:Camera;
var creando:boolean= false;
var ultimoCreado:GameObject;
var objetosCreados:Array;


function Start() { 
	objetosCreados = new Array();
}


function FixedUpdate () {
   var posicion :Vector3 = camaraPrincipal.main.ScreenToWorldPoint (new Vector3 (Input.mousePosition.x,Input.mousePosition.y,25));
	posicion.z = 0;
//	Debug.Log("POSICION : " +posicion +"   RATON : " +Input.mousePosition );
	if (!EstaEnCimaDeGUI()) {
		if (GUI_seleccionpieza1.crearTipoObjeto == 2 ) {
		
			Screen.showCursor = false;
			ultimoCreado = Instantiate(vigaHorizontal, posicion, vigaHorizontal.transform.rotation);
			GUI_seleccionpieza1.crearTipoObjeto = 0;
			creando = true;
		}
		
		if (GUI_seleccionpieza2.crearTipoObjeto == 3 ) {
		
			Screen.showCursor = false;
			ultimoCreado = Instantiate(vigaVertical, posicion, vigaVertical.transform.rotation);
			
			GUI_seleccionpieza2.crearTipoObjeto = 0;
			creando = true;
		}
		
		objetosCreados.Push(ultimoCreado);
	}
	else {
		if (ultimoCreado != null && !ultimoCreado.GetComponent(ObjetosEscenario).colocada) {
			Destroy(ultimoCreado);
			creando=false;
			Screen.showCursor = true;
			objetosCreados.Pop();
		}
	}
	
	if (creando){
		if(Input.GetMouseButton(0))	{
			ultimoCreado.GetComponent(ObjetosEscenario).colocada=true;
			Screen.showCursor = true;
			ultimoCreado.rigidbody.useGravity = true;
			ultimoCreado.rigidbody.isKinematic =false;
			ultimoCreado.rigidbody.detectCollisions = true;
			creando = false;
		}
	
	}
}

function EstaEnCimaDeGUI() {
	
	return (GUI_Barra.encimaBarra || GUI_seleccionpieza1.encimaBarra || GUI_seleccionpieza2.encimaBarra);

}