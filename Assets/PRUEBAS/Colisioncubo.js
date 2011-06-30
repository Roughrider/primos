var cubo:GameObject;
var losaPulsada = false;

function OnTriggerEnter(collision : Collider) {

	if (collision.gameObject.tag == "bola") {
		Debug.Log("COLISIONA BOLA" + collision.gameObject.tag);	
		cubo.transform.localScale.y = 0.25;
		cubo.transform.position.y = 0.125;
		losaPulsada=!losaPulsada;
	} 
} 


function OnTriggerExit(collision : Collider) {	
	if (collision.gameObject.tag == "bola") {
		Debug.Log("SALE BOLA" + collision.gameObject.tag);	
		cubo.transform.localScale.y = 0.5;
		cubo.transform.position.y = 0.25;
		//losaPulsada=false;
	}
} 
