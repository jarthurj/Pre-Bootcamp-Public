function oneTo255(){
    var retArr = [];
    for(var x = 1; x <= 255; x++){
        retArr.push(x);
    }
    return retArr
}
// console.log(oneTo255());

function even1000(){
    var sum = 0;
    for(var x = 2; x <= 1000; x = x + 2){
        sum = sum + x
    }
    return sum;
}
// console.log(even1000());

function odd5000(){
    sum = 0;
    for(var x = 1; x <= 5000; x++){
        if(x % 2 !== 0){
            sum += x;
        }
    }
    return sum;
}
// console.log(odd500());

function sumArr(inArr){
    var sum = 0;
    for(var x = 0; x < inArr.length; x++){
        sum += inArr[x];
    }
    return sum;
}
// console.log(sumArr([-5,2,5,12]));

function maxArr(inArr){
    var max = inArr[0];
    for(var x = 1; x < inArr.length; x++){
        if(inArr[x] > max){
            max = inArr[x];
        }
    }
    return max;
}
// console.log(maxArr([5,4,3,7]));

function avgArr(inArr){
    var sum = 0;
    for(var x = 0; x < inArr.length; x++){
        sum += inArr[x];
    }
    return sum / inArr.length; 
}
// console.log(avgArr([1,3,5,7,20]));

function oddArr(){
    var retArr = [];
    for(var x = 0; x <= 50; x++){
        if(x % 2 !== 0){
            retArr.push(x);
        }
    }
    return retArr;
}
// console.log(oddArr());

function greatY(y, inArr){
    var counter = 0;
    for(var x = 0; x < inArr.length; x++){
        if(inArr[x] > y){
            counter++;
        }
    }
    return counter;
}
// console.log(greatY(3,[1,3,5,7]));

function squares(inArr){
    var retArr = [];
    for(var x = 0; x < inArr.length; x++){
        retArr.push(inArr[x] ** 2);
    }
    return retArr;
}
// console.log(squares([1,5,10,-2]));

function negatives(inArr){
    var retArr = [];
    for(var x = 0; x < inArr.length; x++){
        if(inArr[x] < 0){
            retArr.push(0);
        }
        else{
            retArr.push(inArr[x]);
        }
    }
    return retArr;
}
// console.log(negatives([-1,-2,-3]));

function mMA(inArr){
    var sum = inArr[0];
    var min = inArr[0];
    var max = inArr[0];
    for( var x = 1; x < inArr.length; x++){
        if(inArr[x] < min){
            min = inArr[x];
        }
        if(inArr[x] > max){
            max = inArr[x];
        }
        sum += inArr[x];
    }
    return [min, max, sum / inArr.length];
}
// console.log(mMA([1,5,10,-2]));

function swap(inArr){
    if(inArr.length === 1){
        return inArr;
    }
    else{
        var retArr = [inArr[inArr.length - 1]];
        for(var x = 1; x < inArr.length - 1; x++){
            retArr.push(inArr[x]);
        }
        retArr.push[inArr[0]];
        return retArr;
    }
}

// rand = [1,5,10,-2];
// console.log(swap(rand));
// console.log(rand);

function numToString(inArr){
    var retArr = [];
    for(var x = 0; x < inArr.length; x++){
        if(inArr[x] < 0){
            retArr.push("Dojo");
        }
        else{
            retArr.push(inArr[x]);
        }
    }
        return retArr;
}
console.log(numToString([-1,-3,2]));