var bola:GameObject;
var ParticulasBola:ParticleRenderer;


function OnCollisionEnter(collision : Collision) {
	Debug.Log(collision.gameObject.tag);
	if (collision.gameObject.tag == "Player") {	 
		bola.transform.position = Vector3(-13.79886, 9.345392,0);
		bola.constantForce.enabled = false;
		bola.rigidbody.velocity = Vector3(0,0,0);
		bola.rigidbody.angularVelocity = Vector3(0,0,0);

	}
}