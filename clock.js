// // create a timer that only goes up to 30 seconds

// var counter = 0; // set the timer counter to zero

// var interval = null; // create a variable to put the interval into

// //set the interval
// interval = setInterval( function(){

//     counter++; // increment the counter

//     console.log( "counter: "+counter); // output the current counter "time"

//     // if 30 seconds have passed, stop the counter
//     if( counter === 30 ){
//       clearInterval( counter );
//     }

// }, 1000);



var now = new Date(); // gets current time e.g. Wed Dec 05 2018 10:16:53 GMT+0800 (Singapore Standard Time)

window.onload = function(){
    var ms = 0;
    var s = 0;
    var m = 0;
    var h = 0;
    var mode = "12H" // for "12H"

    var timer = setInterval(function(){
        ms++;
        if (ms == 1000){
            s++;
            ms=0;
        }

        if (s ===60) {
            m++;
            s=0;
        }
        if (m ===60) {
            h++;
            m=0;
        }

        if (h===24){ //for 24 hours, if 12 hours change h === 12
            h=0;
            m=0
            s=0;
            ms=0;
        }

        var dec3ms = dec3(ms);
        var dec2s = dec2(s);
        var dec2m = dec2(m);
        var dec2h = dec2(h);

        if (mode ==="12H"){
            if (h<12){
                // console.log(dec2h +":" + dec2m + ":" + dec2s + " AM");
            } else {
                var hoursPM = h - 12;
                hoursPM = dec2(h);
                // console.log(dec2h +":" + dec2m + ":" + dec2s + " PM");
            }
        } else {
            // console.log(dec2h +":" + dec2m + ":" + dec2s + ":" + dec3ms);
        }


        var secHand = document.getElementById("second");
        secHand.style.transform  = "rotate(" + (s * 6) + "deg)";
        // console.log(secHand.style.transform);

        var minuteHand = document.getElementById("minute");
        minuteHand.style.transform  = "rotate(" + (m * 6) + "deg)";

        var hourHand = document.getElementById("hour");
        hourHand.style.transform  = "rotate(" + (h * 6) + "deg)";



    },1);

    function dec2(x){
        if (x < 10){
            x = "0" + x;
        }
        return x;
    }

    function dec3(x){
        if (x <10){
            x = "00" + x;
        } else if (x <100){
            x = "0" + x;
        }
        return x;
    }
}
