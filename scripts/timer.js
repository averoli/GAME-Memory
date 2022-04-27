const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let totalSeconds = 0;



export default function setTime(){
    ++totalSeconds;
seconds.textContent = convert(totalSeconds);
minutes.textContent =  convert(parseInt(totalSeconds / 60));
console.log(seconds);
}          

function convert(counter){
let convertString = counter + ""

if(convertString.length < 2){
    return "00" + convertString
} else  if (convertString.length == 2){
    return "0" + convertString
} else {
    return convertString
}
}