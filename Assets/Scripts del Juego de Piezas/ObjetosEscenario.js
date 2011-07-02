//Script para ser añadido a todos los objetos que se creen
//Este script sirve para que exista una variable que indica si ya es parte del escenario o no basicamente, para que sino es parte del escenario todavia siga al raton ( cuando se estan colocando )

var colocada:boolean = false;
var camaraPrincipal:GameObject;

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
		
		} else {
			transform.Rotate(Vector3(0,0,10) * Time.deltaTime * 10);
		}		
	}
}