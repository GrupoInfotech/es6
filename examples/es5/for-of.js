
"use strict";var arr=[1,2,3];console.log('con for...of:');for(var _iterator=arr,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}
var n=_ref;console.log(n);}
console.log('con for...in:');for(var i in arr){console.log(i);}