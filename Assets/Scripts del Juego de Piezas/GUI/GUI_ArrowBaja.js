var gameO: GameObject;
var maxVariacion:float = 0.05;
var sentidoArriba = true; //true Arriba 0abajo.
var velMovimiento:float = 0.07;

private var variacionActual:float = 0;

function FixedUpdate () {

	if (maxVariacion <= variacionActual) {
		 variacionActual = 0;
		 sentidoArriba = !sentidoArriba;
	}
	
	if (sentidoArriba) {
		gameO.transform.position.y += Time.deltaTime *velMovimiento;
	}
	else {
		gameO.transform.position.y -= Time.deltaTime *velMovimiento;
	}
	
	 variacionActual += Time.deltaTime *0.2;
}