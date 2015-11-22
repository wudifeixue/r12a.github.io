var _showMesherTrans =  ''
var _showISOTrans = ''


function localInitialise () {
	}


function event_mouseoverCharX ()  {
	// display character information
	span = document.createElement( 'span' );
	span.setAttribute( 'id', 'charname' );
	charinfo = document.createTextNode( this.title );
	span.appendChild(charinfo);
	var chardata = document.getElementById('chardata');	
	chardata.replaceChild( span, chardata.firstChild );
	
	// highlight this character
	this.style.backgroundColor = '#CF9'
	this.style.backgroundColor = '#fc6'
	//this.style.backgroundColor = '#FC0'
	
	// highlight similar characters
	if (_showShapeHints && _h[this.id]) {
		ptr = this.id
		for (i=0;i<_h[ptr].length;i++) {
			//document.getElementById(_h[ptr][i]).style.backgroundColor = '#E6FFCD'
			document.getElementById(_h[ptr][i]).style.backgroundColor = '#FFE6B2'
			//document.getElementById(_h[ptr][i]).style.backgroundColor = '#FFE680'
			}
		}

	// display any variant forms in the dedicated area
	if (this.dataset.variants) { // only do it if there's a class attribute
		// first, get the character code point
		var codepoint = this.id;
		// now generate the img code for the variants
		var variants = this.dataset.variants.split(' ');
		var variantimgs = '';
		for (var i=0; i<variants.length; i++) {
			if (variants[i] == 'is') { variantimgs += '<div class="hint top">Is. <img src="v/'+codepoint+'s.png" alt="" /></div>';  }
			else if (variants[i] == 'i') { variantimgs += '<div class="hint">In. <img src="v/'+codepoint+'i.png" alt="" /></div>' }
			else if (variants[i] == 'm') { variantimgs += '<div class="hint">Med. <img src="v/'+codepoint+'m.png" alt="" /></div>' }
			else if (variants[i] == 'f') { variantimgs += '<div class="hint">Fin. <img src="v/'+codepoint+'f.png" alt="" /></div>' }
			else { 
				variantimgs += '<div class="glyph">'
				switch (variants[i].charAt(1)) {
					case '1': variantimgs += '<span class="hint">+①</span>'; break
					case '2': variantimgs += '<span class="hint">+②</span>'; break
					case '3': variantimgs += '<span class="hint">+③</span>'; break
					}
				variantimgs += '<img src="v/'+codepoint+variants[i]+'.png" alt="" /></div>'
				}
			}
		//alert( variantimgs );
		document.getElementById('variantshapes').innerHTML = variantimgs;
		}
	else {
		document.getElementById('variantshapes').innerHTML = '<span class="hint">no variants</span>'
		}

	}



function event_mouseoverChar ()  {
	// display character information
	span = document.createElement( 'span' );
	span.setAttribute( 'id', 'charname' );
	charinfo = document.createTextNode( this.title );
	span.appendChild(charinfo);
	var chardata = document.getElementById('chardata');	
	chardata.replaceChild( span, chardata.firstChild );
	
	// highlight this character
	this.style.backgroundColor = '#CF9'
	this.style.backgroundColor = '#fc6'
	//this.style.backgroundColor = '#FC0'
	
	// highlight similar characters
	if (_showShapeHints && _h[this.id]) {
		ptr = this.id
		for (i=0;i<_h[ptr].length;i++) {
			//document.getElementById(_h[ptr][i]).style.backgroundColor = '#E6FFCD'
			document.getElementById(_h[ptr][i]).style.backgroundColor = '#FFE6B2'
			//document.getElementById(_h[ptr][i]).style.backgroundColor = '#FFE680'
			}
		}

	// display any variant forms in the dedicated area
	if (this.dataset.variants) { // only do it if there's a class attribute
		// first, get the character code point
		var codepoint = this.id;
		// now generate the img code for the variants
		var variants = this.dataset.variants.split(' ');
		var variantimgs = '<table><tbody>';
		for (var i=0; i<variants.length; i++) {
			if (variants[i] == 's') { variantimgs += '<tr><td class="hint top">Iso</td><td class="hint top"><img src="v/'+codepoint+'s.png" alt="" /></td></tr>';  }
			else if (variants[i] == 'i') { variantimgs += '<tr><td class="hint">Ini</td><td class="hint"><img src="v/'+codepoint+'i.png" alt="" /></td></tr>' }
			else if (variants[i] == 'm') { variantimgs += '<tr><td class="hint">Med</td><td class="hint"><img src="v/'+codepoint+'m.png" alt="" /></td></tr>' }
			else if (variants[i] == 'f') { variantimgs += '<tr><td class="hint">Fin</td><td class="hint"><img src="v/'+codepoint+'f.png" alt="" /></td></tr>' }
			else { 
				variantimgs += '<tr class="glyph"><td>'
				switch (variants[i].charAt(1)) {
					case '1': variantimgs += '<span class="hint">+①</span>'; break
					case '2': variantimgs += '<span class="hint">+②</span>'; break
					case '3': variantimgs += '<span class="hint">+③</span>'; break
					}
				variantimgs += '</td><td><img src="v/'+codepoint+variants[i]+'.png" alt="" /></td></tr>'
				}
			}
		//alert( variantimgs );
		document.getElementById('variantshapes').innerHTML = variantimgs;
		}
	else {
		document.getElementById('variantshapes').innerHTML = '<span class="hint">no variants</span>'
		}

	}



var _h = {
'1828': ['1830', '1831', '182E', '182F'],
'1830': ['1831', '1828'],
'1831': ['182E', '182F', '1828', '1830'],
'182E': ['182F', '1828', '1830', '1831'],
'182F': ['1828', '1830', '1831', '182E'],
'1839': ['182A'],
'182A': ['1839'],
'183B': ['1819'],
'183C': ['183D', '1834'],
'182B': ['182A'],
'183D': ['183C', '1834'],
'182C': ['182D'],
'1834': ['183D', '183C'],
'183E': ['1840', '1841'],
'182D': ['182C'],
'1835': ['1836', '1838'],
'1841': ['183E'],
'1836': ['1835', '1838'],
'1838': ['1836', '1835'],
'1840': ['183E'],
'1800': ['1811'],
'1811': ['1800'],
'1803': ['1804'],
'1804': ['1803'],
'1819': ['183B'],

end: {}
}

var keyboarddef = [
"|᠑,|᠒,|᠓,|᠔,|᠕,|᠖,|᠗,|᠘,|᠙,|᠐",
"᠁|ᠴ,ᠸ|ᠣ,ᠧ|ᠡ,ᠿ|ᠷ,|ᠲ,|ᠶ,|ᠦ,|ᠢ,|ᠥ,|ᠫ",
"|ᠠ,|ᠰ,|ᠳ,|ᠹ,|ᠭ,ᠾ|ᠬ,|ᠵ,ᠻ|ᠺ,ᡀ|ᠯ,《|》",
"ᡁ|ᠽ,|ᠱ,ᡂ|ᠼ,|ᠤ,|ᠪ,ᠩ|ᠨ,|ᠮ,|᠂,|᠃"
]
