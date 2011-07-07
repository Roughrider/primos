var pegado = false;

var arrayHinges = new Array();
var maxObjetosPegados = 3;
var iman:GameObject;

function OnCollisionEnter(collision : Collision) {

	if (collision.gameObject.tag == "Viga") {	 
	
		pegado = true;
		if (arrayHinges.length  < maxObjetosPegados) {
			var hinge = gameObject.AddComponent(HingeJoint);
			hinge.connectedBody = collision.gameObject.rigidbody;
			arrayHinges.Add(hinge);
		}
		
	}
	
}