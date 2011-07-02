//Script para ser añadido a todos los objetos que se creen
//Este script sirve para que exista una variable que indica si ya es parte del escenario o no basicamente, para que sino es parte del escenario todavia siga al raton ( cuando se estan colocando )

var colocada:boolean = false;
var camaraPrincipal:GameObject;
var texturaIconoRotar:Texture;
var rotando = false;
var congela = false; // Simplemente una variable para que no se superpongan en el mismo frame el evento de soltar boton y boton vigente.

function Start() {
	camaraPrincipal =  GameObject.Find("Camara");
	rigidbody.detectCollisions = false;
}

function FixedUpdate () {

	if (!colocada) {
		if(!Input.GetMouseButton(0)) {
			var posicion :Vector3 =camaraPrincipal.camera.main.ScreenToWorldPoint (new Vector3 (Input.mousePosition.x,Input.mousePosition.y,25));
			posicion.z =0;
			
			transform.position = posicion;
		
		} else  {
			if (!congela) {
				Debug.Log("ROTANDO");
				rotando = true;
				transform.Rotate(Vector3(0,0,10) * Time.deltaTime * 10);
			}
						
		}		
	}
}

function OnGUI() {
	if (rotando) {
		var mousePos : Vector3 = Input.mousePosition;
		GUI.depth = -2;
		var pos : Rect = Rect(mousePos.x,Screen.height - mousePos.y,texturaIconoRotar.width/3,texturaIconoRotar.height/3);
		GUI.Label(pos,texturaIconoRotar);
	}
}