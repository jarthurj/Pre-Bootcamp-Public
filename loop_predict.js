for(var num = 0; num < 15; num++){
    console.log(num);
}
// Print numbers 0 through 14
for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    }
}
//Print 3, 9

for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3){
        j++;
    }
}
console.log(j);
// 16