var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");

var f = function(value) {

    var valueIndex = 0;
	var i = 0;
	
	while (i < alphabet.length) {
      if (alphabet[i] == value) {
        valueIndex = i;
		break;
      }
	  i++;
	}
  
  return alphabet[(alphabet.length - 1) - valueIndex];
}

// iterate through all letters
//for (var i = 0; i < alphabet.length; i++) {
//	console.log(f(alphabet[i]));
//}


var g = function(value) {
	for (var i = 0; i < alphabet.length; i++) {
		var needle = alphabet[i];
		var count = (value.match(/a/g) || []).length;
	}
}

g('this has two as');
