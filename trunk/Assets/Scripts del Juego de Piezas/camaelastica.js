var bola:Rigidbody;

function OnCollisionEnter(collision : Collision) {

	if (collision.gameObject.tag == "Player") {	 
		bola.AddForce(-300,610,0);
	}
	
}