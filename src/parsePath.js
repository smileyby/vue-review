var str = 'a.b.c.d';
function parsePath(str){
  var segment = str.split('.');
  return (obj) => {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) return;
      obj = obj[segments[i]]
    }
    return obj;
  }
}
var fn = parsePath(str);
var v = fn({
  a: {
    b: {
      c: {
        d: 10
      }
    }
  }
})