function compute() {
    var principal = document.getElementById("principal").value;
    if (parseInt(principal) < 1) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    var rate = document.getElementById("rate").value
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear() + parseInt(years);
    var amount = principal * years * rate / 100;
    document.getElementById("resultdeposit").innerHTML = "" + principal;
    document.getElementById("resultinterest").innerHTML = "" + rate + "%";
    document.getElementById("resultamount").innerHTML = "" + amount;
    document.getElementById("resultyear").innerHTML = "" + year;

    return false;
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

        