var bola:Rigidbody;

function OnCollisionEnter(collision : Collision) {
	Debug.Log(collision.gameObject.tag);
	if (collision.gameObject.tag == "Player") {	 
		bola.AddForce(-300,610,0);
	}
}