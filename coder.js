
const calculatedays = () => {
    let birth = document.getElementById ("inp1").value;
    let x = new Date();
    let total = x.getTime();
    let hbd = new Date(birth).getTime();
    let calcdays1 = total - hbd;
    let totaldaysofbirth =  Math.floor (calcdays1 / (1000*60*60*24));
    document.getElementById("spn1").innerHTML = totaldaysofbirth + " "+"days have been passed since you born";
    getttime();
}

let wish;
const greeting = () => {
    let name = prompt("Please Enter Your Name");
    let x = new Date();
    let hr = x.getHours();

    if (hr>=4 && hr<12){
        wish = "Good Morning";
    }

    else if (hr>=12 && hr<17){
        wish = "Good Afternoon";
    }

    else if (hr>=17 && hr<22){
        wish = "Good Evening";
    }

    else {
        wish = "Good Night";
    }

    document.getElementById("spn1").innerHTML = wish + " " + name;
    getttime ();
}

const nxthbd = () => {
    let gethbd = document.getElementById("inp1").value;
    let x = new Date();
    let gettotal = x.getTime();
    let getnxthbd = new Date(gethbd).getTime();
    let calcnxthbd = getnxthbd - gettotal;
    let final = Math.floor (calcnxthbd / (1000*60*60*24));
    document.getElementById ("spn1").innerHTML = "Your Next Birthday is" + " " + final + " "+ "days away!";
    getttime();
}

let tax;
const taxcalculator = () => {
    let x = prompt("Please Enter Amount to Calculate Tax");

    if (x < 1000){
        tax = 12;
    }

    else if (x>1000 && x<5000){
        tax = 18;
    }

    else{
        tax = 21;
    }

    let taxcalculator1 = Math.floor((x*tax)/100);
    document.getElementById("spn1").innerHTML = "You have to pay" + " " + taxcalculator1 + " " + "Rs Tax." ;
    getttime();
}

function getttime () {
    let v = new Date();
    let gettime = v.getHours() + ":" + v.getMinutes();
    if (v.getHours() < 9){
       let gettime0 = "0"+v.getHours() + ":" +v.getMinutes();
       document.getElementById ("spn2").innerHTML = "You clicked the button at" + " "+gettime0;
    }

    else if (v.getMinutes() < 9){
        let gettime1 = v.getHours() + ":" +"0"+v.getMinutes();
        document.getElementById ("spn2").innerHTML = "You clicked the button at" + " "+gettime1;
    }

    else if (v.getHours() && v.getMinutes() < 9){
        let gettime2 = "0"+v.getHours() + ":" +"0"+v.getMinutes();
        document.getElementById ("spn2").innerHTML = "You clicked the button at" + " "+gettime2;
     }

    else {
        document.getElementById ("spn2").innerHTML = "You clicked the button at" + " "+gettime;
    }
}

