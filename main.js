const form = document.getElementById('form'),
			   { green, blue, red, alpha } = form.children
		let valueAlpha

		function setColor( color, value ) {
			document.documentElement.style.setProperty(color, value)
		}

		function changeColor(e) {
			if(e.target.matches('#red')) setColor('--red', red.value)
			if(e.target.matches('#green')) setColor('--green', green.value)
			if(e.target.matches('#blue')) setColor('--blue', blue.value)
			if(e.target.matches('#alpha')) setColor('--alpha',  valueAlpha )
		}

		function showNotationRGBA() {
			document.querySelector('#colorRGBA').innerHTML = `
			${red.value}, ${green.value}, ${blue.value}, ${valueAlpha}
			`
		}

		form.addEventListener('mousemove',  e => {
			valueAlpha = alpha.value * alpha.value / 100
			changeColor(e)
			// showNotationRGBA()
		} )

		form.addEventListener('change', e => {
			valueAlpha = alpha.value * alpha.value / 100
			changeColor(e)
			// showNotationRGBA()
		} )