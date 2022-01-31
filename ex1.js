var names = ["Maria", "Antony", "Joy", "Juan"]

var names = ["Maria", "Antony", "Joy", "Juan"];
function newName(array){
    array.push("Ana");
    console.log(array);
}
newName(names);
 

/* Parte 2 */

function Already(array){
    if(array.indexOf("Ana")!==-1){
        console.log(true);
    }else{
        console.log(false);
    }
}
Already(names);

/* Parte 3 */

var newNames = ["Maria","Roberto","Alfonso","Juan", "Ana"]; 
var same = names.filter(x => newNames.indexOf(x) !== -1)
console.log("These names are in both lists: " + same);

/* Parte 4 */

names.forEach(function(element){ 
    let len = element.length;
    let arr = new Array(len).fill([ 1 ]);
    console.log(arr);
})