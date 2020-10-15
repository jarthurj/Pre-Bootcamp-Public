function biggieSize(inArr){
    var retArr = [];
    for(var x = 0; x < inArr.length; x++){
        if(inArr[x] > 0){
            retArr.push("big");
        }
        else{
            retArr.push(inArr[x]);
        }
    }
    return retArr;w
}
// console.log(biggieSize([-1,3,5,-5]));

function hiLow(inArr){
    var max = 0;
    var min = 0;
    for(var x = 0; x < inArr.length; x++){
        if(inArr[x] < min){
            min = inArr[x];
        }
        if(inArr[x] > max){
            max = inArr[x];
        }
    }
    console.log(min);
    return max;
}
// console.log(hiLow([-1,3,5,-5]));

function oneAnother(inArr){
    console.log(inArr[inArr.length - 2]);
    for(var x = 0; x < inArr.length; x++){
        if(inArr[x] % 2 != 0){
            return inArr[x]
        }
    }
}
// console.log(oneAnother([-1,3,5,-5]));

function double(inArr){
    var retArr = [];
    for(var x = 0; x < inArr.length; x++){
        retArr.push(inArr[x] * 2);
    }
    return retArr;
}
// console.log(double([-1,3,5,-5]));

function positives(inArr){
    var counter = 0;
    var retArr = [];
    for(var x = 0; x < inArr.length; x++){
        if(inArr[x] > 0){
            counter++;
        }
        retArr.push(inArr[x]);
    }
    retArr[retArr.length -1] = counter;
    return retArr;
}
// console.log(positives([-1,1,1,1]));


function oddsEvens(inArr){
    var oddCounter = 0;
    var evenCounter = 0;
    for(var x = 0; x < inArr.length; x++){
        if(inArr[x] % 2 === 0){
            evenCounter++;
            oddCounter = 0;
        }
        else{
            oddCounter++;
            evenCounter = 0;
        }
        if(oddCounter === 3){
            console.log("That's Odd");
            oddCounter = 0;
        }
        if(evenCounter === 3){
            console.log("Even more so");
            evenCounter = 0;
        }
    }

}
// oddsEvens([1,1,2,2,1,1,1,2,2,2]);

function seconds(inArr){
    var retArr = [inArr[x]];
    for(var x = 0; x < inArr.length; x++){
        if(x % 2 != 0){
            retArr.push(inArr[x] + 1);
        }
        else{
            retArr.push(inArr[x]);
        }
        console.log(retArr[x]);
    }
    return retArr;
}
function previousLengths(inArr){
    var retArr = [inArr[0]];
    for(var x = 1; x < inArr.length; x++){
        retArr.push(inArr[x - 1].length);
    }
    return retArr;
}
// console.log(previousLengths(["hello", "dojo", "awesome"]));

function addSeven(inArr){
    var retArr = [];
    for(var x = 0; x < inArr.length; x++){
        retArr.push(inArr[x] + 7);
    }
    return retArr;
}
// console.log(addSeven([1,2,3]));


function swap(inArr){
    for(var x = 0; x < Math.floor(inArr.length / 2); x++){
        var temp = inArr[x];
        inArr[x] = inArr[inArr.length - 1 - x];
        inArr[inArr.length - 1 - x] = temp;
    }
    return inArr;
}
// console.log(swap([1,2,3,7,4,5,6]));

function neg(inArr){
    var retArr = [];
    for(var x = 0; x < inArr.length; x++){
        retArr.push(-Math.abs(inArr[x]));
    }
    return retArr;
}
// console.log(neg([1,-3,5]));

function hungry(inArr){
    var food = false;  
    for(var x = 0; x < inArr.length; x++){
        if(inArr[x] === 'food'){
            console.log("Yummy");
            food = true;
        }
    }
    if(!food){
        console.log("hungry");
    }
}
// hungry(['food','food','poop']);

function swap2(inArr){
    for(var x = 0; x < Math.floor(inArr.length / 2); x++){
        var temp = inArr[x];
        inArr[x] = inArr[inArr.length - 1 - x];
        inArr[inArr.length - 1 - x] = temp;
    }
}


function scaleArr(inArr, scale){
    var retArr = [];
    for(var x = 0; x < inArr.length; x++){
        retArr.push[inArr[x] * scale];
    }
    return retArr;
}