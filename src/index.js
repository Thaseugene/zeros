module.exports = function getZerosCount(number) {
  var c=0;
  var i=1;
  while (Math.floor(number/Math.pow(5,i))>0) {
    
    c=c+(Math.floor(number/Math.pow(5,i)));
   i++;
  }return c;
}
