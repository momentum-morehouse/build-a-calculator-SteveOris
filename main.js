function answer(value) {
  document.getElementById("results").value+=value
}
function solve(){
let x = document.getElementById("results").value
let y = eval(x)
document.getElementById("results").value = y 
}
function clear(){
 document.getElementById("results").value = ""
}

