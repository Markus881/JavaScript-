"use strict";

var getOccurrencesCount = function getOccurrencesCount(arr) {
  var newObj = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (!newObj[item]) {
        newObj[item] = 1;
      } else {
        newObj[item] += 1;
      }

      ;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  ;
  return newObj;
}; // const res = getOccurrencesCount(["a", "v", "a", "b", "b"]);


var res = getOccurrencesCount(["apples", "oranges", "pears", "pears", "apples", "oranges", "oranges", "pears"]);
console.log(res);