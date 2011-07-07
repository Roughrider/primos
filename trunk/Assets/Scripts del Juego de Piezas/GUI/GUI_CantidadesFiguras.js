var scriptConfigEscenario:ConfigEscenario;
var tipoPieza = 0; // 0 Horizontal, 1 Vertical

function OnGUI () {

	if (tipoPieza) {
		guiText.text = scriptConfigEscenario.numPiezasVerticalesActuales+"/"+scriptConfigEscenario.numPiezasVerticales;
	}
	else {
		guiText.text = scriptConfigEscenario.numPiezasHorizontalesActuales+"/"+scriptConfigEscenario.numPiezasHorizontales;
	}
}