var arr = [100,101,102];

arr.push(100,101,102);

console.log(arr)

// autre

var arr = [100,101,102];

var arr1 = [100,101,102];

Array.prototype.push.apply(arr,arr1);

console.log(arr)