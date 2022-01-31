var number = -2;
function isNumber(number){
    if ((number>=0) && (number<=25)){
        console.log(number + "between 0 and 25");
    }else if((number>=26) && (number<=100)){
        console.log(number + "between 26 and 100");
    }else if((number>100)){
        console.log(number + "greater than 100");
    }else if((number<0)){
        console.log(number + "less than 0");
    }
}
isNumber(number);