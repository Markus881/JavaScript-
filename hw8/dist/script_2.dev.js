"use strict";

var findExcess = function findExcess(arr) {
  var evenNum = [];
  var oddNum = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var num = _step.value;

      if (num % 2 === 0) {
        evenNum.push(num);
      } else {
        oddNum.push(num);
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
  var res = evenNum.length < oddNum.length ? evenNum[0] : oddNum[0];
  return res;
};

var N = findExcess([1, 1, 0, 1, 1]);
console.log("N = ", N);