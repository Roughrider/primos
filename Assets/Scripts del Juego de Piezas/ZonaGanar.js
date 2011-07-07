var bola:GameObject;
var texturaGanar:Texture;
var guiTextGanar:GUITexture;


function OnTriggerEnter(collision : Collider) {
//	Debug.Log(collision.gameObject.tag);
	if (collision.gameObject.tag == "Player") {	 
		guiTextGanar.texture = texturaGanar;
		
	}
}