// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var resultString = '';

  if(obj === null) {
  	return 'null';
  }
  if(typeof obj === 'string') {
  	return '"' + obj.toString() + '"';
  }
  if(['number', 'boolean'].includes(typeof obj)) {
  	return obj.toString();
  }
  if(Array.isArray(obj)) {
  	obj.forEach(function(element) {
  		resultString += (stringifyJSON(element) + ',');
  	});
  	return '[' + resultString.slice(0, -1) + ']';
  } else {
  	for(var key in obj) {
  		if(key !== 'undefined' && key !== 'functions') {
  		  resultString += ('"' + key + '":' + stringifyJSON(obj[key]) + ',');
  		}
  	}
  	return '{' + resultString.slice(0, -1) + '}';
  }
};
