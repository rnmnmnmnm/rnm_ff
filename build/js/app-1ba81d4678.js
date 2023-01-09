function android() {
    var date = new Date();
    var w = date.getDay();
    var h = date.getHours();
    if (h == 13) {
        window.location.href = "page/notice.html";
    }
    else if (h == 14) {
        window.location.href = "page/password.html";
    }
    else if (h == 20) {
        window.location.href = "page/android-guide.html";
    }
    else if (h == 22) {
        window.location.href = "page/notice.html";
    }
    else {
        window.location.href = "page/android-guide.html";
    }

}

function ios() {
    var date = new Date();
    var w = date.getDay();
    var h = date.getHours();


    if (h == 13) {
        window.location.href = "page/notice.html";
    }
    else if (h == 14) {
        window.location.href = "page/password.html";
    }
    else if (h == 20) {
        window.location.href = "page/ios-tip-simplified.html";
    }
    else if (h == 22) {
        window.location.href = "page/notice.html";
    }
    else {
        window.location.href = "page/ios-tip-simplified.html";
    }

}


