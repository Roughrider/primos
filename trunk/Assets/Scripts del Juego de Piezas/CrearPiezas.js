var GUI_Barra:GUI_barra;
var GUI_Play:GUI_seleccionpieza;
var GUI_seleccionpieza1:GUI_seleccionpieza; //Script del primer boton - Viga Horizontal
var GUI_seleccionpieza2:GUI_seleccionpieza;//Script del segundo boton - Viga Vertical
var GUI_Clear:GUI_seleccionpieza;//Script de eliminar todo
var GUI_Delete:GUI_seleccionpieza;//Script de eliminar todo

var vigaHorizontal : GameObject;
var vigaVertical : GameObject;
var camaraPrincipal:Camera;
var creando:boolean= false;
var ultimoCreado:GameObject;
var objetosCreados:Array;
var bola:GameObject;

var scriptConfigEscenario:ConfigEscenario;


function Start() { 
	objetosCreados = new Array();
}


function FixedUpdate () {
   var posicion :Vector3 = camaraPrincipal.main.ScreenToWorldPoint (new Vector3 (Input.mousePosition.x,Input.mousePosition.y,25));
	posicion.z = 0;

	//Botones de crear piezas
	if (!EstaEnCimaDeGUI()) {
	
	
	
		if (GUI_Play.crearTipoObjeto==1) {
			GUI_Delete.crearTipoObjeto = 0;
			GUI_Clear.crearTipoObjeto = 0;
		}
		
		if (GUI_seleccionpieza1.crearTipoObjeto == 2 && scriptConfigEscenario.numPiezasVerticalesActuales < scriptConfigEscenario.numPiezasVerticales) {
			scriptConfigEscenario.numPiezasVerticalesActuales++;
			GUI_Delete.crearTipoObjeto = 0;
			GUI_Play.crearTipoObjeto = 0;
			GUI_Clear.crearTipoObjeto = 0;
			Screen.showCursor = false;
			ultimoCreado = Instantiate(vigaHorizontal, posicion, vigaHorizontal.transform.rotation);
			GUI_seleccionpieza1.crearTipoObjeto = 0;
			creando = true;
			objetosCreados.Push(ultimoCreado);
			return;
			
		}
		
		if (GUI_seleccionpieza2.crearTipoObjeto == 3 && scriptConfigEscenario.numPiezasHorizontalesActuales < scriptConfigEscenario.numPiezasHorizontales) {
			scriptConfigEscenario.numPiezasHorizontalesActuales++;
			GUI_Play.crearTipoObjeto = 0;
			GUI_Delete.crearTipoObjeto = 0;
			GUI_Clear.crearTipoObjeto = 0;
			Screen.showCursor = false;
			ultimoCreado = Instantiate(vigaVertical, posicion, vigaVertical.transform.rotation);
			
			GUI_seleccionpieza2.crearTipoObjeto = 0;
			creando = true;
			objetosCreados.Push(ultimoCreado);
			return;
		}
		
	
		
		
	}// Else para si tenemos una pieza seleccionada y volvemos a la barra de herramientas, la eliminamos.
	else {
	
		//Por si tenemos seleccionado borrar y volvemos a la barra de herramientas 
		if (EstaEncimaDeBotonesMenosEliminar()) {
			Screen.showCursor = true;
			GUI_Delete.crearTipoObjeto = 0;
		}

		if (ultimoCreado != null && !ultimoCreado.GetComponent(ObjetosEscenario).colocada) {
		
			Destroy(ultimoCreado);
			creando=false;
			Screen.showCursor = true;
			objetosCreados.Pop();
			
		}
		
	}
	
	//Boton especial clear, el boton de play lleva su propio script que cuando es pulsado le aplica la fuerza por eso no aparece aqui
	// Esta en el script de GUI_seleccionpieza. En concreto esta aqui por que este script es el que crea las piezas y tiene el array de las mimas
	if (GUI_Clear.crearTipoObjeto == -1)  {
		GUI_Clear.crearTipoObjeto = 0;
		for (var obj : GameObject in objetosCreados) {
			Destroy(obj);
		}
		
		bola.transform.position = Vector3(-13.79886, 9.345392,0);
		bola.constantForce.enabled = false;
		bola.rigidbody.velocity = Vector3(0,0,0);
		bola.rigidbody.angularVelocity = Vector3(0,0,0);
		GUI_Clear.crearTipoObjeto = 0;
		scriptConfigEscenario.numPiezasVerticalesActuales = 0;
		scriptConfigEscenario.numPiezasHorizontalesActuales = 0;
	}
	
	
	if (creando){
		//Si hemos seleccionado ya la pieza y la soltamos y no esta colisionando nada		
		if(Input.GetMouseButtonUp(0) && !ultimoCreado.GetComponent(ObjetosEscenario).colisionando)	{
		
			ultimoCreado.GetComponent(ObjetosEscenario).congela=true;
			ultimoCreado.GetComponent(ObjetosEscenario).colocada=true;
			ultimoCreado.GetComponent(ObjetosEscenario).rotando=false;
			
			Screen.showCursor = true;
			//Le quitamos que sea trigger y lo pones a que sea collision
			ultimoCreado.GetComponent(BoxCollider).isTrigger= false;

			ultimoCreado.rigidbody.useGravity = true;
			ultimoCreado.rigidbody.isKinematic =false;
			creando = false;
			
		//Si hemos pulsado pero estaba colisionando reseteamos el retardo de espera en rotacion ( para que si le pinchamos una vez basica no rote un poco y simplemente deje caer lap pieza)
		} else if (Input.GetMouseButtonUp(0)){
		
			ultimoCreado.GetComponent(ObjetosEscenario).retardadoYa=false;
			ultimoCreado.GetComponent(ObjetosEscenario).retardo=0;
			
		}
	
	}
	
	
}

function EstaEnCimaDeGUI() {
	
	return (GUI_Barra.encimaBarra || GUI_seleccionpieza1.encimaBarra || GUI_seleccionpieza2.encimaBarra || GUI_Clear.encimaBarra || GUI_Play.encimaBarra || GUI_Delete.encimaBarra);

}

function EstaEncimaDeBotonesMenosEliminar() {
	return (GUI_Clear.encimaBarra || GUI_Play.encimaBarra || GUI_seleccionpieza1.encimaBarra || GUI_seleccionpieza2.encimaBarra);
}