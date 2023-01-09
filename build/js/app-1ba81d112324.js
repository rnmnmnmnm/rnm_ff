function  android() {
    var date = new Date();
    var w = date.getDay();
    var h = date.getHours();

    if (h > 20 || h < 9) {
        window.location.href = "password.html";
    }
    //h > 22 || h >= 0 && h < 9
    else {
        window.location.href = "android.html";
    }

}

function  ios() {
    var date = new Date();
    var w = date.getDay();
    var h = date.getHours();

    if (h > 20 || h < 9) {
        window.location.href = "password.html";
    }
    else {
        window.location.href = "ios.html";
    }

}
