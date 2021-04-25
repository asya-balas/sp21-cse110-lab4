var sec = setInterval(printTimeEverySec, 1000);

function printTimeEverySec(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}