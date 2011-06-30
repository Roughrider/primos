function FixedUpdate () {

	if (Input.GetKey (KeyCode.LeftArrow)) {
	rigidbody.AddForce (-10, 0, 0);
	} 
	
	if (Input.GetKey (KeyCode.RightArrow)) {
	rigidbody.AddForce (10, 0, 0);
		} 
	
	if (Input.GetKey (KeyCode.UpArrow)) {
	rigidbody.AddForce (0, 0, 10);
		} 
	
	if (Input.GetKey (KeyCode.DownArrow)) {
	rigidbody.AddForce (0, 0, -10);
	}
}