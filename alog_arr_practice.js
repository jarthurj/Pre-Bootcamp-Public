var testArr = [6,3,5,1,2,4];
var sum = 0;
for(var x = 0; x < testArr.length; x++){
    sum += testArr[x];
    console.log("Num "+testArr[x]+", Sum "+sum);
}

for(var x = 0; x < testArr.length; x++){
    testArr[x] = testArr[x] * x;
}
console.log(testArr)