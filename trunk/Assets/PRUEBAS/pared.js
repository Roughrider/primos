var inicioPosicionZ:int = 3; //Inicio en coordenada Z de la pared y maximo donde se movera en una direc
var finalPosicionZ:int= -2; //Final en  coordenada Z de la pared y maximo donde se movera en una direc
var velocidadPared = 1; //Velocidad de la pared que podremos cambiar
var scriptLosa:Colisioncubo; //Enlace del script que hice para la losa.

function FixedUpdate () {

	if (scriptLosa.losaPulsada) {
		
		 if (transform.position.z > finalPosicionZ) {
			transform.position.z -= Time.deltaTime * velocidadPared;
		}
				
	}
	else {
	
	 if (transform.position.z < inicioPosicionZ) {
			transform.position.z += Time.deltaTime * velocidadPared;
		}
	
	}

}