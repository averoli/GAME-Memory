const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let totalSeconds = 0;



export default function setTime(){
    ++totalSeconds;
seconds.textContent = convert(totalSeconds % 60);
minutes.textContent =  convert(parseInt(totalSeconds / 60));
console.log(seconds);
}          

function convert(counter){
let convertString = counter + ""
console.log(counter);
if(convertString.length < 2){
    return "0" + convertString
} else {
    return convertString
}
}