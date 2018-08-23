document.write("From here it's JavaScript text: <br /><br />");

			function uponEvent(message){
				alert(message);
			}

			// method to get char input
			function getChar(event){
				if(event.which == null){
					return String.fromCharCode(event.KeyCode);
				}else if (event.which != 0 && event.charCode != 0){
					return String.fromCharCode(event.which);
				}else {
					return null;
				}
			}

			document.getElementById('keyboardInput').onkeypress = 
				function(event){
					var char = getChar(event||windows.event)
					if(!char) return false;

					document.getElementById('keyStatus').innerHTML = char + " was clicked";
					return true;
				}

			document.getElementById('keyboardInput').onfocus = function(event){
				document.getElementById('keyStatus').innerHTML = "Input gained focus"
			}

			document.getElementById('resetKey').onclick = function(event){
				document.getElementById('keyStatus').innerHTML = "Text field reseted"
			}

			document.getElementById('keyboardInput').onselect = function(event){
				document.getElementById('keyStatus').innerHTML = "Text selected"
			}

			document.getElementById('sampleButton').onmouseover = function(event){
				document.getElementById('sampleButton').innerText = "Mouse Over";
			}

			document.getElementById('sampleButton').onmouseout = function(event){
				document.getElementById('sampleButton').innerText = "Mouse left";
			}