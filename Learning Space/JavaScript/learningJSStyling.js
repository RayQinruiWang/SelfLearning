document.write("From here it's JavaScript text: <br /><br />");

			function randomColor() {
				var colorSpace = Math.pow(2, 24)
				var color = '#' + Math.floor(Math.random()*(colorSpace-1)).toString(16);
				return color;
			}

			document.getElementById('changeBackgroundColor').onclick = function(event){
				document.getElementById('sampleDiv').style.backgroundColor = randomColor();
			}
			
			document.getElementById('changeBorderStyle').onclick = function(event){
				document.getElementById('sampleDiv').style.borderStyle = "solid";
			}

			document.getElementById('changeBorderWidth').onclick = function(event){
				document.getElementById('sampleDiv').style.borderWidth = "thick";
			}

			document.getElementById('changeBorderColor').onclick = function(event){
				document.getElementById('sampleDiv').style.borderColor = randomColor();
			}

			document.getElementById('goToGoogle').onclick = function(event){
				window.location.href = "http://www.google.com.au"
			}

			document.getElementById('forwardPage').onclick = function(event){
				history.forward();
			}

			document.getElementById('backPage').onclick = function(event){
				history.back();
			}

			document.getElementById('reloadBtn').onclick = function(event){
				window.location.reload(true);
			}

			document.write("Current URL: ", window.location.herf, "<br/>");
			document.write("Current HOST: ", window.location.hostname, "<br/>");
			document.write("Current Path: ", window.location.pathname, "<br/>");
			var paragraph = document.createElement("p");

			paragraph.setAttribute("id", "paragraph2");
			paragraph.innerHTML= "This is some added non-sence";
			sampleDiv.appendChild(paragraph);
