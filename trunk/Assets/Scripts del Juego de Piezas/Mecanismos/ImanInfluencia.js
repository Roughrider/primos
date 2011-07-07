var imanObject:GameObject;
var fuerzaIman = 5;
var scriptIman:Iman;

function OnTriggerStay(collision : Collider) {

	if (!scriptIman.pegado && collision.gameObject.tag == "Viga") {	 
		 var direction : Vector3 = collision.gameObject.transform.position - imanObject.transform.position;
		imanObject.rigidbody.AddForceAtPosition(direction.normalized * fuerzaIman, collision.gameObject.transform.position);
	
	}

}


