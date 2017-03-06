// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var elementsArray = [];
  var checkClass = function(element) {
    if(_(element.classList).contains(className)) {
      elementsArray.push(element);
    }
    _(element.childNodes).forEach(function(child) {
      checkClass(child);
    });
  }
  checkClass(document.body);
  return elementsArray;
};
