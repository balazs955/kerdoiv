var count = 0;

function mennyiJo() {
    var elsoValasz = document.getElementById("csapat").value;
    var validValaszEgy = "16";
    if(elsoValasz == validValaszEgy) {
        count = count+1;
    }
    var masodikValasz = document.getElementById("kieso").value;
    var validValaszKetto = "Amerika";
    var validValaszKetto2 = "USA";
    var validValaszKetto3 = "amerika";
    var validValaszKetto4 = "usa";
    if(masodikValasz == validValaszKetto || masodikValasz == validValaszKetto2 || masodikValasz == validValaszKetto3 || masodikValasz == validValaszKetto4) {
        count = count+1;
    }
    var harmadikValasz = document.getElementById("nap").value;
    var validValaszHarom = "18";
    if(harmadikValasz == validValaszHarom) {
        count = count+1;
    }
    document.getElementById("count").innerHTML = count;
    return false;
}