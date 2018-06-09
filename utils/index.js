/**
 * Temp alternative to built-in clear() as it doesn't support hdpi displays.
 * Fix for clear() should be released soon: https://github.com/processing/p5.js/pull/2852
 *
 * Alernatively, you can use background(100).
 */
function clear2() {
  document.getElementsByTagName('canvas')[0].getContext('2d').clearRect(0,0,width,height);
}