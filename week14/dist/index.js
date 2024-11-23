"use strict";
function callback(fn, a) {
    setTimeout(function () { fn(a); }, 1000);
}
function greet(a) {
    console.log('hi sameer');
    return a;
}
function sum(x, y) {
    return x + y;
}
