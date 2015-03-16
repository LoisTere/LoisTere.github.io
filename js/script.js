$('[autofocus]').last().focus();
var validityObject = document.getElementById['control'].validity;
function validate() {
  var input = document.getElementById('b');
  var validityState_object = input.validity;
  if(validityState_object.valueMissing) {
     input.setCustomValidity('Please put in all your detail! (required)');	
  } else if (input.patternMismatch) {
    input.setCustomValidity('Your value is too low');
  } else if (input.rangeOverflow) {
    input.setCustomValidity('Your value is too high');
  } else {
    input.setCustomValidity('');
    
}          